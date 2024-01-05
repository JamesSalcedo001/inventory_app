module Api
    class ItemsController < ApplicationController
        skip_before_action :authorize, only: [:index, :show]
        before_action :find_item, only: [:show, :update, :destroy]

        def index
            render json: Item.all
        end

        def show
            render json: @item
        end

        def create
            render json: Item.create!(item_params), status: :created
        end

        def update
            @item.update!(item_params)
            render json: @item
        end

        def destroy
            @item.destroy
            head :no_content
        end

        private 

        def item_params
            params.permit(:name, :image_url, :unit_price)
        end

        def find_item
            @item = Item.find(params[:id])
        end

    end
end