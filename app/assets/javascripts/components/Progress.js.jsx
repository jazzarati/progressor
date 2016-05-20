class Progress extends React.Component {
  points() {
    let challenges = [...this.props.store.project.monsters, ...this.props.store.project.quests]
    let completed = challenges.filter( challenge => { return challenge.completed_at !== null } )
    if (completed.length === 0) {
      return 0
    } else {
      return completed.map( challenge => { return challenge.points } )
                      .reduce( (previousValue, currentValue) => { return previousValue + currentValue } )
    }
  }

  render() {
    const max = this.props.store.requiredPointsForLevel
    const points = this.points() % max
    const totalPoints = this.points()
    const percent = () => {
      return Math.min(100, Math.round(points / max * 100))
    }
    return (
      <div>
        <div className="col-xs-10">
          <div className="progress">
            <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={this.points()} aria-valuemin="0" aria-valuemax={max} style={ { width: percent() + '%' } }>
              { `${points} / ${max}` }
              <span className="sr-only">{points} Complete</span>
            </div>
          </div>
        </div>
        <div className="col-xs-2 text-right">
          {totalPoints}
        </div>
      </div>
    )
  }
}
