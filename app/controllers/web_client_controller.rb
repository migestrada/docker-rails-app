class WebClientController < ApplicationController
  before_action :authenticate_user, only: [:auth]

  def index
  end

  def auth
    render json: { message: 'Correcto inicio de sesion' }, status: 200
  end
end
