class UsersController < ApplicationController
  def logout
    github_logout
  end
end
