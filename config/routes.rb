Rails.application.routes.draw do
  root 'web_client#index'

  devise_for :users, skip: %i[sessions]
  

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'

      # Login
      devise_scope :user do
        post '/login', to: 'sessions#create'
        delete '/logout', to: 'sessions#destroy'
      end
    end
  end
end
