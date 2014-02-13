class GistsController < ApplicationController

  def index
    @gists = current_user.gists.as_json(include: :gist_files)

    render json: @gists
  end

  def create
    @gist = Gist.new(params[:gist])
    @gist.user_id = current_user.id
    @gist.gist_files.build(params[:gist_files]) if params[:gist_files]

    if @gist.save
      render json: @gist
    else
      render json: @gist.errors
    end
  end

  def update
    @gist = Gist.find(params[:id])
    @gist.gist_files.build(params[:gist_files]) if params[:gist_files]

    if @gist.update_attributes(params[:gist])
      render json: @gist
    else
      render json: @gist.errors
    end
  end

end
