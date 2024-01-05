class InventorySerializer < ActiveModel::Serializer
  attributes :id, :quantity, :frequency_of_purchase
  belongs_to :group
  belongs_to :item
end
