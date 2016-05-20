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
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={this.points()} aria-valuemin="0" aria-valuemax="1000" style={ { width: this.points() + '%' } }>
          {this.points()}
          <span className="sr-only">{this.points()} Complete</span>
        </div>
      </div>
    )
  }
}
