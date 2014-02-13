class GistFilesController < ApplicationController

  def update
    @gist_file = GistFile.find(params[:id])

    if @gist_file.update_attributes(params[:gist_files][0])
      render json: @gist_file
    else
      render json: @gist_file.errors
    end
  end

end
