Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }

  root 'web_client#index'
  get '/login', to: 'web_client#login'

  get '/app', to: 'web_client#index'
  get '/invoices', to: 'web_client#index'
  get '/boilerplate', to: 'web_client#index'
  get '/sizes', to: 'web_client#index'

  devise_scope :user do
    post 'sign_in', to: 'users/sessions#create'
    delete 'sign_out', to: 'users/sessions#destroy'
  end

  namespace :api do
    namespace :v1 do
      get '/app', to: 'app#index'
      get '/sizes', to: 'sizes#index'
    end
  end

  match '*path' => redirect('/login')   unless Rails.env.development?
end
