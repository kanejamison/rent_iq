# Service for generating AI-powered property descriptions
class PropertyDescription
  def initialize(property)
    @property = property
  end

  def generate
    return unless openai_configured?

    response = openai_client.chat(
      parameters: {
        model: "gpt-4o",
        messages: [
          { role: "user", content: user_prompt }
        ],
        temperature: 0.7
      }
    )

    response.dig("choices", 0, "message", "content")
  rescue StandardError => e
    Rails.logger.error("OpenAI API Error: #{e.message}")
    nil
  end

  def openai_client
    @openai_client = OpenAI::Client.new(access_token: Rails.application.credentials.kanes_open_ai_key, log_errors: true)
  end

  def openai_configured?
    Rails.application.credentials.kanes_open_ai_key.present?
  end

  def user_prompt
    <<~PROMPT
      You are a real estate copywriter - write a one paragraph description for the following property to be featured on a website. Use city and unit type best guess regarding the type of property. The first paragraph should serve as a property overview, with brief callouts about the property's amenities and lifestyle.

       IMPORTANT: DO NOT REPLY WITH ANY ADDITIONAL COMMENTARY, REPLY ONLY WITH THE ACTUAL DESCRIPTION WE HAVE REQUESTED. Use plaintext with line breaks. Do not use markdown or HTML.

      Property Name: #{@property.name}
      Address: #{@property.address}
      Year Built: #{@property.year_built}
      Website: #{@property.website_url}

      Unit Summary:
      #{formatted_unit_summary}
    PROMPT
  end

  def unit_summary
    return @unit_summary if @unit_summary

    units = @property.units
    @unit_summary = {
      total_count: units.count,
      bedroom_breakdown: units.group_by(&:bedroom_count)
                              .transform_values(&:count)
                              .sort.to_h,
      avg_size: units.average(:unit_size)&.round || 0,
      size_range: [units.minimum(:unit_size), units.maximum(:unit_size)].compact
    }
  end

  def formatted_unit_summary
    return "No units available yet" if unit_summary[:total_count].zero?

    lines = []
    lines << "Total Units: #{unit_summary[:total_count]}"

    unit_summary[:bedroom_breakdown].each do |bedrooms, count|
      bedroom_label = bedrooms == 1 ? "#{bedrooms} bedroom" : "#{bedrooms} bedrooms"
      lines << "  - #{count}x #{bedroom_label} units"
    end

    if unit_summary[:avg_size] > 0
      lines << "Average Size: #{unit_summary[:avg_size]} sq ft"
    end

    if unit_summary[:size_range].size == 2
      lines << "Size Range: #{unit_summary[:size_range][0]} - #{unit_summary[:size_range][1]} sq ft"
    end

    lines.join("\n")
  end
end
