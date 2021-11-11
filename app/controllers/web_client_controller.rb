class WebClientController < ApplicationController
  before_action :authenticate_user!, only: %i[index]

  def index
  end
  
  def login
  end
end
