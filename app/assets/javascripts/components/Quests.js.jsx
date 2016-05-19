class Quests extends React.Component {
  render() {
    return (
      <div>
        <h2>Quests</h2>
        <CreateQuest store={this.props.store} />
      </div>
    )
  }
}
