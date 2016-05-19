class ProjectList extends React.Component {
  renderProject(project) {
    return (
      <li key={`project-list-${project.id}`}><a href={`projects/${project.id}`}>{project.name}</a></li>
    )
  }

  render() {
    return (
      <div>
        <h2>Projects</h2>
        <ul>
          { this.props.projects.map(project => this.renderProject(project)) }
        </ul>
        <CreateProject trigger={this.props.trigger} />
      </div>
    )
  }
}
