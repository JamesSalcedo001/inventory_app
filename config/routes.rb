Rails.application.routes.draw do
  
  namespace :api do
    resources :shopping_lists
    resources :inventories
    resources :items
    resources :groups
    resources :users
  end

  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
