Rails.application.routes.draw do
  
  namespace :api do
    resources :shopping_lists
    resources :inventories
    resources :items
    resources :groups
    resources :users
  end

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
