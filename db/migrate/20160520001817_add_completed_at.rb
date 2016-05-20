class AddCompletedAt < ActiveRecord::Migration
  def change
    add_column :quests, :completed_at, :datetime
    add_column :monsters, :completed_at, :datetime
  end
end
