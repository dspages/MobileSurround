class TracksController < ApplicationController

  # Pick a particular sound file by key
  def show
    @track.find(params[:id])
  end

  # List all available sound files and their keys
  def index
    @tracks = Track.all
  end

  # Upload sound file... and down-mix it into channels...
  def create

  end


end
