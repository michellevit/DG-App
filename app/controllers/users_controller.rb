class UsersController < ApplicationController
  include Tokenable
  
  def update_username
    token = request.headers['Authorization']&.split(' ')&.last
    puts "Received token: #{token}"
    @current_user = authenticate_token(token) if token
    puts "Authenticated user: #{@current_user.inspect}" 
    if @current_user
      puts "GOT HERE"
      requested_username = params[:username]
      puts "Requested Username: #{requested_username}"
      puts "A"
      if @current_user.username == requested_username
        puts "B"
        render json: { error: 'New username cannot be the same as the current one.' }, status: :unprocessable_entity
      else
        puts "D"
        @current_user.username = requested_username
        if @current_user.save
          render json: { user: @current_user }
        else
          puts "E"
          render json: { error: @current_user.errors.full_messages.join(', ') }, status: :unprocessable_entity
        end
      end
    else
      puts "F"
      render json: { error: 'Invalid token' }, status: :unauthorized
    end
  end
end
