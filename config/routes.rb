NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]

  resources :gists, only: [:index, :update, :create]

  resources :gist_files, only: [:update]

  resources :favorites, only: [:index]
  resources :tags, only: [:index]

  root :to => "roots#root"
end
