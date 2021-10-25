class Api::V1::UsersController < ActionController::Base
  before_action :authenticate_user, only: [:index]
  def index
    response = {
      json: {},
      status: 200
    }

    render response
  end

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

  def create
    user = User.new(user_params)
    response = {}
    if user.save
      response = { json: { user: user }, status: 200 }
    else
      response = { json: { error: user.error }, status: 400 }
    end

    render response
  end
end
