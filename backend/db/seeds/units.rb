# db/seeds/units.rb
  puts "Seeding units..."

  Property.find_each do |property|
    # Skip if property already has units
        if property.units.any?
          puts "  Skipping #{property.name} (already has #{property.units.count} units)"
          next
        end


    # Random number of units between 4 and 24
    num_units = rand(4..24)

    puts "  Creating #{num_units} units for #{property.name}..."

    num_units.times do |i|
      # Generate unit number/name (e.g., "101", "2B", "A-301")
      unit_number = case rand(3)
      when 0 then (100 + i + 1).to_s # "101", "102", etc.
      when 1 then "#{(i / 8) + 1}#{('A'..'H').to_a[i % 8]}" # "1A", "1B", "2A", etc.
      else "#{i + 1}" # "1", "2", "3", etc.
      end

      # Vary bedroom counts (studios to 3-bedroom)
      bedroom_count = [0, 1, 1, 2, 2, 2, 3].sample

      # Bathroom count based on bedroom count
      bathroom_count = case bedroom_count
      when 0 then 1.0
      when 1 then [1.0, 1.5].sample
      when 2 then [1.5, 2.0, 2.0].sample
      when 3 then [2.0, 2.5, 3.0].sample
      end

      # Unit size based on bedroom count (square feet)
      base_size = case bedroom_count
      when 0 then rand(450..650)
      when 1 then rand(650..900)
      when 2 then rand(900..1300)
      when 3 then rand(1300..1800)
      end

      Unit.find_or_create_by(
        property: property,
        name: "Unit #{unit_number}"
      ) do |unit|
        unit.bedroom_count = bedroom_count
        unit.bathroom_count = bathroom_count
        unit.unit_size = base_size
      end
    end
  end

  puts "Units seeded: #{Unit.count} total units across #{Property.count} properties"
