class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string :title
      t.text :description
      t.string :image_url
      t.string :image_caption
      t.float :lat
      t.float :long

      t.timestamps
    end
  end
end
