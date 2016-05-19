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
      <div>
        <h4>Create Project</h4>
        <form>
          <label>Name</label>
          <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
          <input type="submit" onClick={this.createProject.bind(this)} />
        </form>
      </div>
    )
  }
}
