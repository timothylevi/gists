class Gist < ActiveRecord::Base
  attr_accessible :title, :user_id, :favorite, :tag_ids

  belongs_to :user

  has_many :gist_files

  has_many :taggings

  has_many :tags, through: :taggings, source: :tag

end
