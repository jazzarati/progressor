class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :create_user_unless_exists

  def create_user_unless_exists
    if github_authenticated?
      user = github_user(:user)
      unless User.exists?(github_id: user.id)
        User.create(github_username: user.login, github_id: user.id)
        redirect_to users_dashboard_path
      end
    end
  end
end
