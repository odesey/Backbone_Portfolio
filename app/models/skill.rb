class Skill < ActiveRecord::Base
  attr_accessible :skill, :name

  belongs_to :project

  def as_json(options = {})
    super({ :only => [:name] }.merge(options))
  end
end
