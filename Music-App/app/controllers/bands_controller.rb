class BandsController < ApplicationController

#  before_action :require_user

  attr_accessor :bands

  def index
    @bands = Band.all
  end

end
