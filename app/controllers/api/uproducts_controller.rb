class Api::UproductsController < ApplicationController
  before_action :set_user
  before_action :set_product, only: [:show, :update, :destroy]

  def index
    render json: @current_user.products
  end

  def show
    render json: @product
  end

  def create
    @product = @current_user.products.new(product_params)
    if @product.save
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity 
    end
  end

  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: { errors: @product.errors }, status: :unprocessable_entity 
    end
  end

  def destroy
    @product.destroy
    render json: { message: 'Product deleted'}
  end

  private 
    def product_params
      params.require(:product).permit(:name, :price)
    end

    def set_user
      @current_user = User.find(params[:user_id])
    end

    def set_product
      @product = @current_user.products.find(params[:id])
    end

end
