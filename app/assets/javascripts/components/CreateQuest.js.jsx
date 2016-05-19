class CreateQuest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: '',
      points: ''
    }
  }

  updateDescription(e) {
    this.setState({description: e.target.value})
  }

  updatePoints(e) {
    this.setState({points: e.target.value})
  }

  createQuest(e) {
    e.preventDefault()
    $.ajax(
      {
        url: `/projects/${this.props.store.project.id}/quests`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'post',
        data: JSON.stringify({ description: this.state.description, points: this.state.points })
      })
      .success((results) => {
        this.setState({
          description: '',
          points: ''
        })
        this.props.trigger({type: 'QUEST_CREATED'})
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
              <h4 className="panel-title">Create Quests</h4>
            </div>
            <div className="panel-body">
              <form className="form">
                <div className="form-group create-quest">
                  <label>Description</label>
                  <input type="text" className="form-control" value={this.state.description} onChange={this.updateDescription.bind(this)} />
                  <label>Points</label>
                  <input type="text" className="form-control" value={this.state.points} onChange={this.updatePoints.bind(this)} />
                  <button type="submit" className="btn btn-primary" onClick={this.createQuest.bind(this)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
