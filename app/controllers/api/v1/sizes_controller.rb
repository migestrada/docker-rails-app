class Api::V1::SizesController < ApplicationController
  def index
    sizes = Size.all

    response = {
      json: {
        objects: {
          sizes: sizes
        }
      },
      status: 200
    }

    render response
  end
end
