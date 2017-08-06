Rails.application.routes.draw do
  resources :tracks, only: [:show, :index, :create]
end
