class QuestRow extends React.Component {
  complete() {
    $.ajax(
      {
        url: `/projects/${this.props.store.project.id}/quests/${this.props.quest.id}/complete`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'put'
      })
      .success((results) => {
        this.props.trigger({type: 'QUEST_COMPLETED'})
      })
      .fail((something) => {
        console.log('fail')
        console.log(something)
      }
    )
  }

  render() {
    const is_complete = () => { return this.props.quest.completed_at !== null }

    if (is_complete()) {
      return (
        <tr className="completed">
          <td>
            {this.props.quest.description}
            <span className="label label-success pull-right">{this.props.quest.points} points</span>
          </td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>
            {this.props.quest.description}
            <span className="btn btn-success pull-right" onClick={this.complete.bind(this)}>Complete</span>
            <span className="label label-success pull-right">{this.props.quest.points} points</span>
          </td>
        </tr>
      )
    }

  }
}
