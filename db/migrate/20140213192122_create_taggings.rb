class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :tag_id, null: false
      t.integer :gist_id, null: false

      t.timestamps
    end
    add_index :taggings, :tag_id
    add_index :taggings, :gist_id
    add_index :taggings, [:tag_id, :gist_id], unique: true
  end
end
