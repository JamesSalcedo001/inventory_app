Rails.application.routes.draw do
  
  namespace :api do
    resources :shopping_lists
    resources :inventories
    resources :items
    resources :groups
    resources :users, only: [:update, :destroy]

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    get "/me", to: "users#me"
    post "/signup", to: "users#create"
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
