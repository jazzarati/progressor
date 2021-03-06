class Monsters extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: false
    }
  }

  toggleCompleted() {
    this.setState({ showCompleted: !this.state.showCompleted })
  }

  renderMonsterRow(monster) {
    return (
      <MonsterRow key={`monster-list-${monster.id}`} store={this.props.store} monster={monster} trigger={this.props.trigger} />
    )
  }

  render() {
    let showLabel = ''
    let monsters = this.props.store.project.monsters

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

    const completedFilter = (monster) => {
      if (monster.completed_at !== null) { return this.state.showCompleted } else { return true }
    }

    if (this.state.showCompleted) {
      showLabel = 'Hide Defeated'
      monsters = monsters.sort(sortOnCompleted)
    } else {
      showLabel = 'Show Defeated'
      monsters = monsters.filter(completedFilter)
    }

    return (
      <div className="container-fluid current-monsters">
        <div>
          <MonsterArena monsters={this.props.store.project.monsters} />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th><h4>Current Monsters</h4><span className="badge pull-right" onClick={this.toggleCompleted.bind(this)}>{showLabel}</span></th>
              </tr>
            </thead>
            <tbody>
              { monsters.map(monster => this.renderMonsterRow(monster)) }
            </tbody>
          </table>
          <CreateMonster store={this.props.store} trigger={this.props.trigger} />
        </div>
      </div>
    )
  }
}
