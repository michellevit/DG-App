module Api
  class UsersController < ApplicationController
    include TokenableConcern
    
    def update_username
      token = request.headers['Authorization']&.split(' ').last
      user, error = authenticate_token(token) if token
      
      if user
        @current_user = user
      else
        render json: { error: error || 'Invalid token' }, status: :unauthorized
      end
    end

    def user_exists
      user = User.find_by(username: params[:username])
      if user
        render json: { exists: true, id: user.id }
      else
        render json: { exists: false }, status: :not_found
      end
    end

    def leaderboard
      top_users = User.order(points: :desc).limit(25)
      render json: top_users, only: [:username, :points]
    end

  end
end
