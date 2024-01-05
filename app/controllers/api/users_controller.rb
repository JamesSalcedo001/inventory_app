module Api
    class UsersController < ApplicationController

        def me
            render json: @current_user, status: :ok
        end

        def create
            user = User.create!(user_params)
            session[:user_id] = user.id
            render json: user, status: :created
        end

        private

        def user_params
            params.permit(:username, :password, :avatar)
        end
    end
end
