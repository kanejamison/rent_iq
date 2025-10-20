class UnitsController < ApplicationController
  before_action :set_property, only: [:index]
  before_action :set_unit, only: %i[ show update destroy ]

  # GET /units
  # OR
  # GET /properties/:property_id/units
  def index
    @units = @property ? @property.units : Unit.all

    render json: @units
  end

  # GET /units/1
  def show
    render json: @unit
  end

  # POST /units
  def create
    @unit = Unit.new(unit_params)

    if @unit.save
      render json: @unit, status: :created, location: @unit
    else
      render json: @unit.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /units/1
  def update
    if @unit.update(unit_params)
      render json: @unit
    else
      render json: @unit.errors, status: :unprocessable_content
    end
  end

  # DELETE /units/1
  def destroy
    @unit.destroy!
  end

  private
    # set property ID when index is nested in properties route.
    def set_property
      @property = Property.find(params[:property_id]) if params[:property_id]
    end

    # Use callbacks to share common setup or constraints between actions.
    def set_unit
      @unit = Unit.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def unit_params
      params.expect(unit: [ :unit_name, :bedroom_count, :bathroom_count, :unit_size, :property_id ])
    end
end
