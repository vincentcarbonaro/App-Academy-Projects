class UsersController < ApplicationController

  before_action :redirect_if_logged_in, only: [:new, :create]

  def new
    @user = User.new

    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      log_in_user!(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])

    render :show
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
