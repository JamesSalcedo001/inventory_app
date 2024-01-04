class Group < ApplicationRecord
    has_many :users
    has_one :inventory
    has_one :shopping_list
end
