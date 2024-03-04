class UsersController < ApplicationController
  include Tokenable
  
  def update_username
    token = request.headers['Authorization']&.split(' ')&.last
    puts "Received token: #{token}"
    @current_user = authenticate_user(token) if token
    puts "Authenticated user: #{@current_user.inspect}" 
    if @current_user
      requested_username = params[:username]
      if @current_user.username == requested_username
        render json: { error: 'New username cannot be the same as the current one.' }, status: :unprocessable_entity
      elsif User.exists?(username: requested_username)
        render json: { error: 'Username already in use' }, status: :unprocessable_entity
      elsif @current_user.update(username: requested_username)
        render json: { user: @current_user }
      else
        render json: { error: 'Failed to update username' }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end

  def authenticate_user
    token = params[:token]
    @current_user = authenticate_token(token) if token
    if @current_user
      render json: {
        valid: true,
        user: @current_user
      }
    else
      render json: {
        valid: false,
        error: 'Invalid token'
      }
    end
  end

end