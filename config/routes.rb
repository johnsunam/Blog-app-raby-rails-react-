Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: :index
    resources :articles, only: [:index, :show]
    resources :users, only: [] do
      collection do
        post :register
      end
    end
    get '/login', to: 'sessions#new'
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
  end

  match '*path', to: 'pages#index', via: :all
end
