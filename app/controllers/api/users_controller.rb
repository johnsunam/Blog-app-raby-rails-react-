module API
  class UsersController < ApplicationController
    protect_from_forgery with: :null_session
    def register
      @user = User.create(
        username: params[:username],
        email: params[:email],
        password: params[:password]
      )
      if @user.save
        response = { message: 'User created successfully.'}
        render json: response, status: :created
      else
        render json: @user.errors, status: :bad
      end
    end
  end
end