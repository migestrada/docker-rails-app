class Api::V1::SessionsController < Devise::SessionsController
  respond_to :json
  protect_from_forgery prepend: true

  private

  def respond_with(resource, _opts = {})
    response = if resource.id.blank?
                { 
                  json: {
                    error: {
                      message: "Usuario o contrasena invalidos"
                    },
                    status: 400
                  },
                  status: 400
                }
               else
                response = {
                  json: resource,
                  status: 200,
                }
               end

    render response
  end

  def respond_to_on_destroy
    head :no_content
  end
end