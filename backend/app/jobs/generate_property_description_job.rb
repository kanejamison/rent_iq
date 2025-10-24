class GeneratePropertyDescriptionJob < ApplicationJob
  queue_as :default

  def perform(property_id)
    property = Property.find(property_id)
    description_service = PropertyDescription.new(property)

    generated_description = description_service.generate

    if generated_description.present?
      property.update(description: generated_description)
      Rails.logger.info("Generated description for Property ##{property_id}")
    else
      Rails.logger.warn("Failed to generate description for Property ##{property_id}")
    end
  end
end
