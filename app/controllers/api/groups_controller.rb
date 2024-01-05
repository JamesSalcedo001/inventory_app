module Api
    class GroupsController < ApplicationController
        before_action :group_find, only: [:show, :update, :destroy]
        
        def index
            render json: Group.all
        end

        def show
            render json: @group
        end

        def create
            render json: Group.create!(group_params), status: :created
        end

        def update
            @group.update!(group_params)
            render json: @group
        end

        def destroy
            @group.destroy
            head :no_content
        end

        private

        def group_params
            params.permit(:name)
        end

        def group_find
            @group = Group.find(params[:id])
        end

    end 
end