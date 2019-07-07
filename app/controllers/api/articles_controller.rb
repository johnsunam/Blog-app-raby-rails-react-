module API
  class ArticlesController < ApplicationController
    def index
      if params[:id]
        article = Article.find(params[:id])
        render json: article, status: :ok 
      else 
        render json: Article.all
      end
    end
    def show
      article = Article.find(params[:id])
      render json: article, status: :ok
    end
  end
end