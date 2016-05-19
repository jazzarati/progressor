Warden::GitHub::Rails.setup do |config|
  config.add_scope :user, redirect_uri: ENVied.GITHUB_REDIRECT_URL
end
