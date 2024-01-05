class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :required_quantity
  belongs_to :group
  belongs_to :item
end
