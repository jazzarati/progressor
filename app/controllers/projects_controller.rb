class ProjectsController < ApplicationController
  respond_to :json, :html

  def index
    render json: Project.all
  end

  def show
    respond_with ProjectSerializer.new(Project.find(params[:id]))
  end

  def create
    project_params = params.require(:project).permit(:name)
    project = Project.create(project_params)
    respond_with ProjectSerializer.new(project)
  end

  class ProjectSerializer
    def initialize(project)
      @project = project
    end

    def to_json(context)
      {
        id: @project.id,
        name: @project.name,
        quests: @project.quests
      }.to_json
    end

    def to_model
      @project
    end
  end
end
