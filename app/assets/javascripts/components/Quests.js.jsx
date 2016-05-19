class Quests extends React.Component {
  renderQuest(quest) {
    return (
      <li key={`quest-list-${quest.id}`}>
        <p>{quest.description} for {quest.points} points</p>
      </li>
    )
  }

  render() {
    return (
      <div>
        <h2>Quests</h2>
        <ul>
          { this.props.store.project.quests.map(quest => this.renderQuest(quest)) }
        </ul>
        <CreateQuest store={this.props.store} trigger={this.props.trigger} />
      </div>
    )
  }
}
