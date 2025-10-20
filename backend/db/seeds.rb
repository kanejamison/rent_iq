# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Explicitly load seed files in order
  seed_files = [
    'properties',
    'units'
    # etc.
  ]

  seed_files.each do |seed_file|
    seed_path = Rails.root.join("db/seeds/#{seed_file}.rb")
    if File.exist?(seed_path)
      puts "Loading #{seed_file}..."
      require seed_path
    else
      puts "Warning: #{seed_file}.rb not found, skipping..."
    end
  end

  puts "Seed process complete!"
