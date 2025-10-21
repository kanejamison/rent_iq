require "test_helper"

class UnitsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @unit = units(:one)
  end

  test "should get index" do
    get units_url, as: :json
    assert_response :success
  end

  test "should create unit" do
    assert_difference("Unit.count") do
      post units_url, params: { unit: { bathroom_count: @unit.bathroom_count, bedroom_count: @unit.bedroom_count, property_id: @unit.property_id, name: @unit.name, unit_size: @unit.unit_size } }, as: :json
    end

    assert_response :created
  end

  test "should show unit" do
    get unit_url(@unit), as: :json
    assert_response :success
  end

  test "should update unit" do
    patch unit_url(@unit), params: { unit: { bathroom_count: @unit.bathroom_count, bedroom_count: @unit.bedroom_count, property_id: @unit.property_id, name: @unit.name, unit_size: @unit.unit_size } }, as: :json
    assert_response :success
  end

  test "should destroy unit" do
    assert_difference("Unit.count", -1) do
      delete unit_url(@unit), as: :json
    end

    assert_response :no_content
  end
end
