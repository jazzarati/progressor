class Project extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      project: undefined
    }
  }

  componentDidMount() {
    this.loadProject()
  }

  loadProject() {
    const projectId = /\/projects\/(\d+)/.exec(window.location.pathname)[1]
    $.ajax(
      {
        url: `/projects/${projectId}.json`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'get'
      })
      .success((result) => {
        this.setState({project: result})
      }
    )
  }

  trigger(event) {
    switch (event.type) {
      case 'QUEST_CREATED':
      case 'QUEST_COMPLETED':
      case 'MONSTER_CREATED':
      case 'MONSTER_COMPLETED':
        this.loadProject()
        break
      default:
        console.log(`Unknown event: ${event.type}`)
    }
  }

  render() {
    if (this.state.project !== undefined) {
      return(
        <div className="container">
          <div className="page-header">
            <h2>{this.state.project.name}</h2>
          </div>
          <div className="row">
            <Progress store={this.state} />
          </div>
          <div className="row">
            <div className="col-md-6"><Quests store={this.state} trigger={this.trigger.bind(this)}/></div>
            <div className="col-md-6"><Monsters store={this.state} trigger={this.trigger.bind(this)}/></div>
          </div>
        </div>
      )
    } else {
      return(
        <div className="container">
        </div>
      )
    }
  }
}

if (window.Components === undefined) {
  window.Components = {}
}
window.Components.Project = Project
