class CreateUser < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string  :github_username, null: false
      t.integer :github_id,       null: false
    end
  end
end
