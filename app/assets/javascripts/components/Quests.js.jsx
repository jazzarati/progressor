class Quests extends React.Component {
  renderQuest(quest) {
    return (
      <tr>
        <td key={`quest-list-${quest.id}`}>
          {quest.description} 
          <span className="label label-success pull-right">{quest.points} points</span>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th><h4>Current Quests</h4></th>
                </tr>
              </thead>
              <tbody>
                { this.props.store.project.quests.map(quest => this.renderQuest(quest)) }
              </tbody>
            </table>
          <CreateQuest store={this.props.store} trigger={this.props.trigger} />
        </div>
      </div>
    )
  }
}
