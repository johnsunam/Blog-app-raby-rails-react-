class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :article
  validates :comment, presence: true, length: {minimum:3, maximum:100}
  validates :user_id, presence: true
  validates :article_id, presence: true
end