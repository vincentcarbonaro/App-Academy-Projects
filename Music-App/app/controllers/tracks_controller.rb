class TracksController < ApplicationController

#  before_action :require_user
  ## this disables the ability to view tracks without being logged in 

  attr_accessor :tracks

  def index
    @track = Track.all
  end

  def new
    @track = Track.new
    render :new
  end

  def create
    @track = Track.new(track_params)

    if @track.save ## save was a success
      fail
    else
      flash.now[:errors] = @track.errors.full_messages
      render :new
    end
  end

  private

  def track_params
    params.require(:track).permit(:title)
  end

end
