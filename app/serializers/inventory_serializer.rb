class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :frequency_of_purchase
  has_one :group
  has_one :item
end
