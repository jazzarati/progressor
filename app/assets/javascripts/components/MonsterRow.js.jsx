class MonsterRow extends React.Component {
  complete() {
    $.ajax(
      {
        url: `/projects/${this.props.store.project.id}/monsters/${this.props.monster.id}/complete`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'put'
      })
      .success((results) => {
        this.props.trigger({type: 'MONSTER_COMPLETED'})
      })
      .fail((something) => {
        console.log('fail')
        console.log(something)
      }
    )
  }

  render() {
    const is_complete = () => { return this.props.monster.completed_at !== null }

    if (is_complete()) {
      return (
        <tr className="completed">
          <td>
            <span>{this.props.monster.description} is complete</span>
            <span className="badge">{this.props.monster.classification}</span>
            <span className="label label-success pull-right">{this.props.monster.points} points</span>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>
            <span>{this.props.monster.description}</span>
            <span className="badge">{this.props.monster.classification}</span>
            <span className="btn btn-success pull-right" onClick={this.complete.bind(this)}>Complete</span>
            <div className="btn btn-danger pull-right">Remove</div>
            <span className="label label-success pull-right">{this.props.monster.points} points</span>
          </td>
        </tr>
      )
    }
  }
}
