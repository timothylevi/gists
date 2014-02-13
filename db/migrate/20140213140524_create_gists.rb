class CreateGists < ActiveRecord::Migration
  def change
    create_table :gists do |t|
      t.integer :user_id
      t.string :title

      t.timestamps
    end
    add_index :gists, :user_id
  end
end
