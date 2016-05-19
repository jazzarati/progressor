class CreateMonster < ActiveRecord::Migration
  def change
    create_table :monsters do |t|
      t.string     :classification, null: false
      t.string     :description, null: false
      t.integer    :points, null: false
      t.belongs_to :project, null: false, index: true
    end
  end
end
