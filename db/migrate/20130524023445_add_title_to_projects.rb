class AddTitleToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :title, :string
    add_column :projects, :url, :string
    add_column :projects, :body, :string
    add_column :projects, :user_id, :integer
  end
end
