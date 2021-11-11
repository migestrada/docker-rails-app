class ApplicationController < ActionController::Base
  respond_to :json
  skip_before_action :verify_authenticity_token

  def after_sign_in_path_for(resource)
    root_path
  end
end
