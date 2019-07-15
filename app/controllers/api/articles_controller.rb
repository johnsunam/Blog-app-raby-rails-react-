module API
  class ArticlesController < ApplicationController
    protect_from_forgery with: :null_session
    def index
      if params[:id]
        article = Article.find(params[:id])
        render json: article, status: :ok 
      else 
        render json: Article.all
      end
    end
    def create
      title = params[:title]
      user = params[:user_id]
      description = params[:description]
      @article = Article.create(
        title: title,
        user_id: user,
        description: description
      )
      if @article.save
        response = { message: 'Article save successfully.', article: @article }
        render json: response, status: :created
      else 
        render json: @article.errors, status: :bad
      end
    end
    def show
      article = Article.find(params[:id])
      render json: article, status: :ok
    end
    def like
      @article = Article.find(params[:blog])
      saveLike = @article.update_attributes(
       like: @article.like + 1
      )
      if saveLike
        render json: { likes: @article.like }, status: :ok
      else 
        render json:saveLike.errors, status: :bad 
      end
    end
  end
end