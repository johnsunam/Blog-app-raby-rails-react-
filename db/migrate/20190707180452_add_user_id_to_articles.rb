class AddUserIdToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :user_id, :integer, :null => false, :default => 0
  end
end
