# Create sample properties (idempotent - won't create duplicates)
  Property.find_or_create_by(name: "Sunset Apartments") do |property|
    property.address = "123 Ocean Boulevard, Santa Monica, CA 90401"
    property.year_built = 2018
    property.website_url = "https://sunsetapts.example.com"
  end

  Property.find_or_create_by(name: "Downtown Plaza") do |property|
    property.address = "456 Main Street, Austin, TX 78701"
    property.year_built = 2015
    property.website_url = "https://downtownplaza.example.com"
  end

  Property.find_or_create_by(name: "Riverside Towers") do |property|
    property.address = "789 River Road, Portland, OR 97201"
    property.year_built = 2020
    property.website_url = "https://riversidetowers.example.com"
  end

  Property.find_or_create_by(name: "Mountain View Residences") do |property|
    property.address = "321 Highland Avenue, Denver, CO 80202"
    property.year_built = 2017
    property.website_url = "https://mountainviewres.example.com"
  end

  Property.find_or_create_by(name: "Urban Loft Studios") do |property|
    property.address = "654 Industrial Way, Brooklyn, NY 11201"
    property.year_built = 2019
    property.website_url = "https://urbanloftstudios.example.com"
  end

  Property.find_or_create_by(name: "Lakeside Manor") do |property|
    property.address = "987 Lakeshore Drive, Chicago, IL 60611"
    property.year_built = 2016
    property.website_url = "https://lakesidemanor.example.com"
  end

  Property.find_or_create_by(name: "Palm Court Apartments") do |property|
    property.address = "147 Palm Avenue, Miami, FL 33139"
    property.year_built = 2021
    property.website_url = "https://palmcourtapts.example.com"
  end

  Property.find_or_create_by(name: "Heritage Square") do |property|
    property.address = "258 Historic Lane, Boston, MA 02108"
    property.year_built = 2014
    property.website_url = "https://heritagesquare.example.com"
  end

  Property.find_or_create_by(name: "Tech Hub Residences") do |property|
    property.address = "369 Innovation Drive, San Francisco, CA 94103"
    property.year_built = 2022
    property.website_url = "https://techhubres.example.com"
  end

  Property.find_or_create_by(name: "Green Valley Commons") do |property|
    property.address = "741 Meadow Street, Seattle, WA 98101"
    property.year_built = 2013
    property.website_url = "https://greenvalleycommons.example.com"
  end

  puts "Total properties: #{Property.count}"
