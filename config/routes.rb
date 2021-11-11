Rails.application.routes.draw do
  root 'web_client#index'
  get '/login', to: 'web_client#login'

  get '/app', to: 'web_client#index'

  devise_for :users, skip: %i[sessions]

  # Login
  devise_scope :user do
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end
  

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'
    end
  end
end
