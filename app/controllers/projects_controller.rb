class ProjectsController < ApplicationController
  respond_to :json, :html

  def index
    render json: Project.all
  end

  def show
    respond_with Project.find(params[:id])
  end

  def create
    project_params = params.require(:project).permit(:name)
    project = Project.create(project_params)
    respond_with project
  end
end
