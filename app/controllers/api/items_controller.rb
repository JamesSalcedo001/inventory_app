module Api
    class ItemsController < ApplicationController
        skip_before_action :authorize, only: [:index, :show]

        def index
            render json: Item.all
        end

        def show
            render json: Item.find(params[:id])
        end

    end
end