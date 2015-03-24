class AddUniqunesstoEmailandTokenIndex < ActiveRecord::Migration
  def change
    change_column :users, :email, :string, unique: true
    add_index :users, :session_token
  end
end
