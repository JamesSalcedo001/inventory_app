module Api
    class ShoppingListsController < ApplicationController
        before_action :set_group
        before_action :shopping_list_find, only: [:show, :update, :destroy]

        def index
            render json: @group.shopping_lists
        end

        def show
            render json: @shopping_list
        end

        def create
            render json: @group.shopping_lists.create!(shopping_list_params), status: :created
        end

        def update
            @shopping_list.update!(shopping_list_params)
            render json: @shopping_list
        end


        def destroy
            @shopping_list.destroy
            head :no_content
        end

        private 

        def set_group
            @group = Group.find(params[:group_id])
        end

        def shopping_list_find
            @shopping_list = @group.shopping_lists.find(params[:id])
        end

        def shopping_list_params
            params.permit(:item_id, :required_quantity)
        end

    end
end