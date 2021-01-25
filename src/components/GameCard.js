import React from 'react'
import '.././App.css'
import {Link} from 'react-router-dom'
class GameCard extends React.Component {

    render() {

        return (
            <div >
              <img className = "Image" src={this.props.url} alt="gif"/>
              <div className = "game-links">
                  <Link to ={{
                      pathname: `/game/${this.props.game.name}`,
                      gameProps: {
                        game: this.props.game
                      }
                    }}>
                    {this.props.game.name}
                  </Link>
              </div>
            </div>
        )

    }
}
export default GameCard 