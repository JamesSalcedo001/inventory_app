module Api
    class InventoriesController < ApplicationController
        before_action :set_group

        def index
            render json: @group.inventories
        end

        private

        def inventory_params
            params.permit(:item_id, :quantity, :frequency_of_purchase)
        end

        def set_group
            @group = Group.find(params[:id])
        end
    end    
end