class GistFile < ActiveRecord::Base
  attr_accessible :name, :body, :gist_id

  belongs_to :gist

end
