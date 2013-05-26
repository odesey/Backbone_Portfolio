require 'spec_helper'

describe Project do
	
	describe 'newsted attributes' do
		before do

			json = {
				"title" => "My Amazing Project",
				"skills_attributes" => [
					{"name" => "Ruby"},
					{"name" => "AJAX"},
					{"name" => "Backbone"}
				]
			}

			@project = Project.new(json)
		end

		it "should have filled in all the skills" do
			@project.skills.length.should eq(3)
			@project.skills.first.name.should eq("Ruby")
		end
	end
end

