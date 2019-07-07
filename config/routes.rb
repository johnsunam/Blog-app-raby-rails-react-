Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api, defaults: { format: 'json' } do
    resources :posts, only: :index
    resources :articles, only: [:index, :show]
  end

  match '*path', to: 'pages#index', via: :all
end
