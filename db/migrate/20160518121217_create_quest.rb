class CreateQuest < ActiveRecord::Migration
  def change
    create_table :quests do |t|
      t.string     :description, null: false
      t.integer    :points, null: false
      t.belongs_to :project, null: false, index: true
    end
  end
end
