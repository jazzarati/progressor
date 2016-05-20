class CreateMonster extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.intialState()
  }

  intialState() {
    return {
      description: '',
      points: '',
      classification: 'minion'
    }
  }

  updateDescription(e) {
    this.setState({description: e.target.value})
  }

  updatePoints(e) {
    this.setState({points: e.target.value})
  }

  updateClassification(e) {
    this.setState({classification: e.target.value})
  }

  createMonster(e) {
    e.preventDefault()
    $.ajax(
      {
        url: `/projects/${this.props.store.project.id}/monsters`,
        dataType: 'JSON',
        contentType: 'application/json; charset=UTF-8',
        method: 'post',
        data: JSON.stringify({ description: this.state.description, points: this.state.points, classification: this.state.classification })
      })
      .success((results) => {
        this.setState({
          description: '',
          points: '',
          classification: ''
        })
        this.props.trigger({type: 'MONSTER_CREATED'})
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
              <h4 className="panel-title">Create Monsters</h4>
            </div>
            <div className="panel-body">
              <form className="form">
                <div className="form-group create-monster">
                  <label>Classification</label>
                  <select className="form-control" onChange={this.updateClassification.bind(this)} value={this.state.classification}>
                    <option value="boss">Boss</option>
                    <option value="minion">Minion</option>
                  </select>
                  <label>Description</label>
                  <input type="text" className="form-control" value={this.state.description} onChange={this.updateDescription.bind(this)} />
                  <label>Points</label>
                  <input type="text" className="form-control" value={this.state.points} onChange={this.updatePoints.bind(this)} />
                  <button type="submit" className="btn btn-primary" onClick={this.createMonster.bind(this)}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
