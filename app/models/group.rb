class Group < ApplicationRecord
    has_many :user_groups
    has_many :users, through: :user_groups
    has_one :inventory
    has_one :shopping_list
end


