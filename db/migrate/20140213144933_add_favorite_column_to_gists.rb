class AddFavoriteColumnToGists < ActiveRecord::Migration
  def change
    add_column :gists, :favorite, :boolean, default: false
  end
end
