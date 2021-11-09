Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  root 'web_client#index'

  devise_for :users, skip: :all

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'

      # Users
      get '/users', to: 'users#index'
      post '/users', to: 'users#create'
    end
  end
end
