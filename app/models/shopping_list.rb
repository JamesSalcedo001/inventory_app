class ShoppingList < ApplicationRecord
  belongs_to :group
  belongs_to :item
end
