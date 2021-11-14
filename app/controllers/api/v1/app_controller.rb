class Api::V1::AppController < ActionController::Base

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
