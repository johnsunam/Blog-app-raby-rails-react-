class AddLikedUserToArticles < ActiveRecord::Migration[5.1]
  def change
    add_column :articles, :liked_user, :integer, array: true, default: []
  end
end
