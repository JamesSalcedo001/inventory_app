class Item < ApplicationRecord
    has_many :inventories
    has_many :shopping_lists
end
