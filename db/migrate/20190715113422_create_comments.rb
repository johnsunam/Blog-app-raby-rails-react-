class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :comment
      t.datetime :updated_at
      t.datetime :created_at
      t.integer :user_id
    end
  end
end
