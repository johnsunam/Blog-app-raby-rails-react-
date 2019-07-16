Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: :index
    resources :articles, only: [:index, :show, :create]
    resources :users, only: [] do
      collection do
        post :register
      end
    end
    resources :comments, only: [:index, :create, :show]
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    get '/like/:blog/:user', to: 'articles#like'
  end

  match '*path', to: 'pages#index', via: :all
end
