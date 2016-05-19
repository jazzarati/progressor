class Project < ActiveRecord::Base
  has_many :quests
  has_many :monsters
end
