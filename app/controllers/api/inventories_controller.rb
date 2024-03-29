module Api
    class InventoriesController < ApplicationController
        before_action :set_group
        before_action :found_inventory, only: [:show, :update, :destroy]

        def index
            render json: @group.inventories
        end

        def show
            render json: @inventory
        end

        def create
            render json: @group.inventories.create!(inventory_params), status: :created
        end

        def update
            @inventory.update!(inventory_params)
        end

        def destroy
            @inventory.destroy
            head :no_content
        end

        private

        def inventory_params
            params.permit(:item_id, :quantity, :frequency_of_purchase)
        end

        def found_inventory
            @inventory = @group.inventories.find(params[:id])
        end

        def set_group
            @group = Group.find(params[:id])
        end
    end    
end