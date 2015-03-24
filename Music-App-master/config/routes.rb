Rails.application.routes.draw do

  root to: redirect("/session/new")

  resource :session, only: [:create, :new, :destroy]

  resources :users, only: [:create, :new, :show]

  resources :bands, :albums, :tracks

end
