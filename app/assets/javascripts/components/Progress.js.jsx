class Progress extends React.Component {
  points() {
    let challenges = [...this.props.store.project.monsters, ...this.props.store.project.quests]
    return challenges.filter( challenge => { return challenge.completed_at !== null } )
              .map( challenge => { return challenge.points } )
              .reduce( (previousValue, currentValue) => { return previousValue + currentValue } )
  }

  render() {
    return (
      <div className="progress">
        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={this.points()} aria-valuemin="0" aria-valuemax="1000" style={ { width: '20%' } }>
          {this.points()}
          <span className="sr-only">{this.points()} Complete</span>
        </div>
      </div>
    )
  }
}
