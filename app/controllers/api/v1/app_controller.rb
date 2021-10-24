class Api::V1::AppController < ActionController::Base
  def index
    response = {
      json: {},
      status: 200
    }

    render response
  end
end
