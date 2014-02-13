class Tagging < ActiveRecord::Base
  attr_accessible :tag_id, :gist_id

  belongs_to :tag

  belongs_to :gist

end
