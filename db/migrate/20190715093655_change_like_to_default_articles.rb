class ChangeLikeToDefaultArticles < ActiveRecord::Migration[5.1]
  def change
    change_column_default :articles, :like, 0
  end
end
