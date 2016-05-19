class Monsters extends React.Component {
  renderMonster(monster) {
    return (
      <tr key={`monster-list-${monster.id}`}>
        <td>
          <span className="label pull-left">{monster.classification}</span>
          {monster.description}
          <span className="label label-success pull-right">{monster.points} points</span>
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
                  <th><h4>Current Monsters</h4></th>
                </tr>
              </thead>
              <tbody>
                { this.props.store.project.monsters.map(monster => this.renderMonster(monster)) }
              </tbody>
            </table>
          <CreateMonster store={this.props.store} trigger={this.props.trigger} />
        </div>
      </div>
    )
  }
}
