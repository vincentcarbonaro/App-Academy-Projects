class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.datetime :birth_date, null: false
      t.string :color, null: false
      t.string :name, null: false
      t.string :sex, null: false, inclusion: ['M', 'F']
      t.text :description, null: false
      t.timestamps
    end
  end
end
