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
      <div className="container-fluid">
        <div className="row">
          <div className="page-header">
            <h2>Projects</h2>
          </div>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th><h4>Current Projects</h4></th>
              </tr>
            </thead>
            <tbody>
              { this.props.projects.map(project => this.renderProject(project)) }
            </tbody>
          </table>
          <CreateProject trigger={this.props.trigger} />
        </div>
      </div>
    )
  }
}
