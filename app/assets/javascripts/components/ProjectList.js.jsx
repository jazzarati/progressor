class ProjectList extends React.Component {
  renderProject(project) {
    return (
      <tr>
        <td key={`project-list-${project.id}`}><a href={`projects/${project.id}`}>{project.name}</a></td>
      </tr>
    )
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Current Projects</th>
              </tr>
            </thead>
            <tbody>
              { this.props.projects.map(project => this.renderProject(project)) }
            </tbody>
          </table>
        <CreateProject trigger={this.props.trigger} />
      </div>
    )
  }
}
