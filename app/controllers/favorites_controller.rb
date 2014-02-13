class FavoritesController < ApplicationController
  def index
    @favorites = current_user.gists.where(favorite: true)

    render json: @favorites
  end
end
