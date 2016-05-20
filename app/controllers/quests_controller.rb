class QuestsController < ApplicationController
  respond_to :json, :html

  def index
    render json: Quest.all
  end

  def show
    respond_with Quest.find(params[:id])
  end

  def create
    quest_params = params.require(:quest).permit(:description, :points)
    quest_params[:project_id] = params[:project_id]

    quest = Quest.create(quest_params)
    render json: quest
  end

  def complete
    completor = Services::Complete.new(Quest.find(params[:id]))
    completor.perform

    render json: completor.result
  end
end
