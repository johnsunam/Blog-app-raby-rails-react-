module API
  class CommentsController < ApplicationController
    protect_from_forgery with: :null_session
    def index
    end
    def create
      @comment = Comment.create(
        comment: params[:comment],
        user_id: params[:user_id],
        article_id: params[:article_id]
      )
      if @comment.save
        render json:{ 'comment' => @comment, 'user' => @comment.user}, status: :created
      else
        render json: @comment.errors, status: :bad
      end
    end
    def show
      @comments = Comment.where(article_id: params[:id]);
      userComments = []
      @comments.each do |comment|
        userComments.push({ 'comment' => comment, 'user' => comment.user })
      end
      render json: userComments, status: :ok
    end
  end
end