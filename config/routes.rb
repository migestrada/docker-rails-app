Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  root 'web_client#index'
  get '/app', to: 'web_client#index'
  get '/login', to: 'web_client#login'

  devise_scope :user do
    post 'sign_in', to: 'users/sessions#create'
    delete 'sign_out', to: 'users/sessions#destroy'
  end

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'
    end
  end
end
