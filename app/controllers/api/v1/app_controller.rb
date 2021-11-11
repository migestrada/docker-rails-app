class Api::V1::AppController < ActionController::Base
  before_action :authenticate_user!

  def index
    response = {
      json: {
        text: 'AAAAAAAAAAAA'
      },
      status: 200
    }

    render response
  end
end
