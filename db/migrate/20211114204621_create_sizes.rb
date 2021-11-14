class CreateSizes < ActiveRecord::Migration[6.1]
  def change
    create_table :sizes do |t|
      t.string :name,     unique: true
      t.string :code,     unique: true

      t.timestamps
    end
  end
end
