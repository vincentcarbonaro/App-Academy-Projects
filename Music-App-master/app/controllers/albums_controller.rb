class AlbumsController < ApplicationController

  #before_action :require_user

  attr_accessor :albums

  def index
    @albums = Album.all
  end

end
