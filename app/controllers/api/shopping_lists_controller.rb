module Api
    class ShoppingListsController < ApplicationController
        before_action :set_group


        private 

        def set_group
            @group = Group.find(params[:group_id])
        end

        def shopping_list_params
            params.permit(:item_id, :required_quantity)
        end

    end
end