class MonstersController < ApplicationController
  respond_to :json, :html

  def index
    render json: Monster.all
  end

  def show
    respond_with Monster.find(params[:id])
  end

  def create
    monster_params = params.require(:monster).permit(:description, :points, :classification)
    monster_params[:project_id] = params[:project_id]

    monster = Monster.create(monster_params)
    render json: monster
  end

  def complete
    completor = Services::Complete.new(Monster.find(params[:id]))
    completor.perform

    render json: completor.result
  end
end
