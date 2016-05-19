class CreateProject extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  updateName(e) {
    this.setState({name: e.target.value})
  }

  createProject(e) {
    e.preventDefault()
    $.ajax(
      {
        url: '/projects',
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'post',
        data: JSON.stringify({ name: this.state.name })
      })
      .success((results) => {
        this.setState({name: ''})
        this.props.trigger({type: 'PROJECT_CREATED'})
      })
      .fail((something) => {
        console.log('fail')
        console.log(something)
      }
    )
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Create Project</h4>
            </div>
            <div className="panel-body">
              <form className="form-inline">
                <div className="form-group create-project">
                  <label>Name</label>
                  <input type="text" className="form-control" value={this.state.name} onChange={this.updateName.bind(this)} />
                  <button type="submit" className="btn btn-primary" onClick={this.createProject.bind(this)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
