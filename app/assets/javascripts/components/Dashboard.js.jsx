class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    this.loadProjects()
  }

  loadProjects() {
    $.ajax(
      {
        url: '/projects.json',
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'get'
      })
      .success((results) => {
        this.setState({projects: results})
      }
    )
  }

  trigger(event) {
    switch (event.type) {
      case 'PROJECT_CREATED':
        this.loadProjects()
        break
      default:
        console.log(`Unknown event: ${event.type}`)
    }
  }

  render() {
    return(
      <div className="container">
        <ProjectList projects={this.state.projects} trigger={this.trigger.bind(this)} />
      </div>
    )
  }
}

if (window.Components === undefined) {
  window.Components = {}
}
window.Components.Dashboard = Dashboard
