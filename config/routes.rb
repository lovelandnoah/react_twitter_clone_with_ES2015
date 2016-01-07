Rails.application.routes.draw do
  root 'dashboard#index'
  resources :tweets
  get 'tweet_search', to: 'tweets#search'
  devise_for :users, controllers: { registrations: 'registrations' }
end
