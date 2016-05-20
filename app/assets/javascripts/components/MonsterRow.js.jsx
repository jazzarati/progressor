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

  delete() {
    $.ajax(
      {
        url: `/projects/${this.props.store.project.id}/monsters/${this.props.monster.id}`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'delete'
      })
      .success((results) => {
        this.props.trigger({type: 'MONSTER_DELETED'})
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
            <span className="label label-info pull-right">{this.props.monster.points} points</span>
            <span className="label label-default pull-right">{this.props.monster.classification}</span>
          </td>
        </tr>
      )
    } else {
      return (
        <tr className="ongoing">
          <td>
            <div>{this.props.monster.description}</div>
            <div className="label label-default pull-left">{this.props.monster.classification}</div>
            <div className="label label-info pull-left">{this.props.monster.points} points</div>
            <div className="btn btn-success pull-right" onClick={this.complete.bind(this)}>Defeat</div>
            <div className="btn btn-danger pull-right" onClick={this.delete.bind(this)}>Remove</div>
          </td>
        </tr>
      )
    }
  }
}
