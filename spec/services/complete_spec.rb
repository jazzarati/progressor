require "rails_helper"

RSpec.describe Services::Complete, type: :services do
  it "completes a model" do
    model = FactoryGirl.create(:quest)
    completor = Services::Complete.new(model).perform
    expect(model.reload.completed_at).not_to be_nil
  end
end
