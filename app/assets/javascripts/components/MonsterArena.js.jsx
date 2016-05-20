class MonsterArena extends React.Component {
  render() {
    const renderBig = (monster) => {
      return(
        <div className="big_monster_holder" key={`big-monster-image-${monster.id}`}>
            <img src="/images/big_monster.png" className="img-responsive" alt="Responsive image"/>
        </div>
      )
    }

    const renderSmall = (monster) => {
      return(
        <div className="small_monster_holder" key={`small-monster-image-${monster.id}`}>
            <img src="/images/small-monster-1.png" className="img-responsive" alt="Responsive image"/>
        </div>
      )
    }

    let activeMonsters = this.props.monsters.filter( monster => { return monster.completed_at === null } )
    const monsters = activeMonsters.reduce( (acc, monster) => {
      if (monster.classification === 'minion') {
        acc.small = acc.small.concat(monster)
      } else {
        acc.big = acc.big.concat(monster)
      }
      return acc
    }, { small: [], big: []} )

    if (activeMonsters.length === 0) { return null }

    return (
      <div>
        <div className="monster_arena">
          { monsters.big.map(monster => renderBig(monster)) }
        </div>

        <div className="monster_arena">
          { monsters.small.map(monster => renderSmall(monster)) }
        </div>
      </div>
    )
  }
}
