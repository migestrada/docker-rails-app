require "test_helper"

class WebClientControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get web_client_index_url
    assert_response :success
  end
end
