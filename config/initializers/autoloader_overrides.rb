# http://pothibo.com/2013/07/namespace-stuff-in-your-app-folder/
['app/services'].each do |path|
  Rails.application.config.to_prepare do
    path = Rails.root + path
    ActiveSupport::Dependencies.autoload_paths -= [path.to_s]
    reloader = ActiveSupport::FileUpdateChecker.new [], path.to_s => [:rb] do
      ActiveSupport::DescendantsTracker.clear
      ActiveSupport::Dependencies.clear
      Dir[path + "**/*.rb"].each do |file|
        ActiveSupport.require_or_load file
      end
    end
    Rails.application.reloaders << reloader
    ActionDispatch::Reloader.to_prepare { reloader.execute_if_updated }
    reloader.execute
  end
end
