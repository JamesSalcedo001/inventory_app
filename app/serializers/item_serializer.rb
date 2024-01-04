class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :unit_price
end
