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
      <div>
        <h4>Create Quest</h4>
        <form>
          <label>Description</label>
          <input type="text" value={this.state.description} onChange={this.updateDescription.bind(this)} />
          <label>Points</label>
          <input type="text" value={this.state.points} onChange={this.updatePoints.bind(this)} />
          <input type="submit" onClick={this.createQuest.bind(this)} />
        </form>
      </div>
    )
  }
}
