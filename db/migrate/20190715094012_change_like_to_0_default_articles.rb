class ChangeLikeTo0DefaultArticles < ActiveRecord::Migration[5.1]
  def change
    change_column :articles, :like, :integer, :default => 0

  end
end
