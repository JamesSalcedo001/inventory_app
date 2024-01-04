class ShoppingListSerializer < ActiveModel::Serializer
  attributes :id, :required_quantity
  has_one :group
  has_one :item
end
