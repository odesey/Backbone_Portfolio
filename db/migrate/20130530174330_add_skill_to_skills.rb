class AddSkillToSkills < ActiveRecord::Migration
  def change
    add_column :skills, :skill, :string
    add_column :skills, :project_id, :integer
  end
end
