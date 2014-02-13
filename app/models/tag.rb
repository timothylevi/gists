class Tag < ActiveRecord::Base
  attr_accessible :name

  has_many :taggings
  has_many :gists, through: :taggings, source: :gist

  validates :name, uniqueness: true
end
