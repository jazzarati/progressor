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
      default:
        console.log(`Unknown event: ${event.type}`)
    }
  }

  render() {
    return(
      <div className="container">

      </div>
    )
  }
}

if (window.Components === undefined) {
  window.Components = {}
}
window.Components.Project = Project
