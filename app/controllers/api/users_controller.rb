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
        Rails.logger.error("User found with username: #{params[:username]}")
        Rails.logger.info("User found with username: #{params[:username]}")
        render json: { exists: true, id: user.id }
      else
        Rails.logger.error("User not found with username: #{params[:username]}")
        Rails.logger.info("User not found with username: #{params[:username]}")
        render json: { exists: false }, status: :not_found
      end
      
      # Disable caching
      response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, max-age=0'
      response.headers['Pragma'] = 'no-cache'
      response.headers['Expires'] = '0'
    end

    def leaderboard
      top_users = User.order(points: :desc).limit(25)
      render json: top_users, only: [:username, :points]
    end

  end
end
