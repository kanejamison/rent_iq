class CreateProperties < ActiveRecord::Migration[8.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.text :address
      t.integer :year_built
      t.string :website_url

      t.timestamps
    end
  end
end
