Rails.application.routes.draw do
  root 'web_client#index'

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'
    end
  end
end
