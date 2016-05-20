module Services
  class Complete
    def initialize(model)
      @model = model
    end

    def perform
      @model.completed_at = Time.current
      @model.save!
    end

    def result
      @model
    end
  end
end
