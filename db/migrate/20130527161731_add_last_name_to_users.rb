class AddLastNameToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :img_url, :string
    add_column :users, :bio, :string
    add_column :users, :mission, :string
  end
end
