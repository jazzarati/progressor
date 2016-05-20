class Quests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: false
    }
  }

  toggleCompleted() {
    this.setState({ showCompleted: !this.state.showCompleted })
  }

  renderQuest(quest) {
    return (
      <QuestRow key={`quest-list-${quest.id}`} store={this.props.store} quest={quest} trigger={this.props.trigger} />
    )
  }

  render() {
    let showLabel = ''
    let quests = this.props.store.project.quests

    const sortOnCompleted = (a,b) => {
      if (a.completed_at === null && b.completed_at === null || a.completed_at !== null && b.completed_at !== null) {
        return 0
      } else if (a.completed_at === null && b.completed_at !== null) {
        return -1
      } else if (a.completed_at !== null && b.completed_at === null) {
        return 1
      } else {
        return 0
      }
    }

    const completedFilter = (quest) => {
      if (quest.completed_at !== null) { return this.state.showCompleted } else { return true }
    }

    if (this.state.showCompleted) {
      showLabel = 'Hide Completed'
      quests = quests.sort(sortOnCompleted)
    } else {
      showLabel = 'Show Completed'
      quests = quests.filter(completedFilter)
    }

    return (
      <div className="container-fluid current-quests">
        <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>
                    <h4>Current Quests</h4>
                    <span className="badge pull-right" onClick={this.toggleCompleted.bind(this)}>{showLabel}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                { quests.map(quest => this.renderQuest(quest)) }
              </tbody>
            </table>
          <CreateQuest store={this.props.store} trigger={this.props.trigger} />
        </div>
      </div>
    )
  }
}
