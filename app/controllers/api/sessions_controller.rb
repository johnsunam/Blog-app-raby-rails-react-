module API
  class SessionsController < ApplicationController
    protect_from_forgery with: :null_session
    def new
    end

    def create
      user = User.find_by(email: params[:session][:email].downcase)
      if user && user.authenticate(params[:session][:password])
        log_in user
        response = { message: 'User loggedIn!!', data: current_user }
        render json: response, status: :ok
      else 
        render json: { message: 'Invalid email/password combination!!' }
      end
    end

    def destroy
      log_out
    end
  end
end