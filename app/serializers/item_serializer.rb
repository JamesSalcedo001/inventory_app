class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :unit_price

  has_many :inventories
  has_many :shopping_lists
end
