class CreateShoppingLists < ActiveRecord::Migration[7.0]
  def change
    create_table :shopping_lists do |t|
      t.references :group, null: false, foreign_key: true
      t.references :item, null: false, foreign_key: true
      t.integer :required_quantity

      t.timestamps
    end
  end
end
