class Property < ApplicationRecord
  has_many :units, dependent: :destroy

  after_create :generate_description

  def generate_description
    # Run asynchronously to avoid blocking property creation
    GeneratePropertyDescriptionJob.perform_later(id)
  end
end
