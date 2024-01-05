Rails.application.routes.draw do
  
  namespace :api do
    
    resources :users, only: [:update, :destroy] do
      collection do
        get "me", to: "users#me"
      end
    end

    post "login", to: "sessions#create"
    delete "logout", to: "sessions#destroy"
    post "signup", to: "users#create"

    resources :items

    resources :groups do
      resources :shopping_lists, except: [:new, :edit]
      resources :inventories, except: [:new, :edit]
    end
  
  end
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
