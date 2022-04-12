Rails.application.routes.draw do
  
  namespace :api do
    resources :products 
    get '/braintree_token', to: 'braintrees#token'
    post '/payment', to: 'braintrees#payment'


    # if you have a user as a parent 
    # resources :users, except: [:index, :show, :create, :update, :destroy] do
    #   # children routes here 
    #   resources :products
    # end



  end

end
