class User < ActiveRecord::Base
  attr_accessible :first_name, :last_name, :img_url, :bio, :mission
end
