// class GamePage extends React.Component{
//     constructor(){
//         super();
//         this.state ={
//             game : this.props.location.gameProps
//         }
//     }
// }
import GameCard from './GameCard'
const GamePage = (props) => {

    const { game } = props.location.gameProps

    console.log(game)
  
    return (
      <div className = "GamePage">
        <h1>{game.name}</h1>
        <p>Released: {game.released}</p>
        <p>Rating: {game.rating}</p>
        {/* <video src = {game.clip.clips.full}/> */}
        <h3>Genre(s):</h3>
          { 
            game.genres.map(g => `${g.name} | `)
          }
  
        <h3>Platform(s):</h3>
          { 
            game.platforms.map(p => `${p.platform.name} | `)
          }
      
        <ul>
          {
            game.short_screenshots.map(ss => <li><img className ="pg-img"src={ss.image} alt='screenshot'></img></li>)
          }
        </ul>
        <h3>Review(s):</h3>
          { 
            game.ratings.map(r => `${r.title}, ${r.percent} | `)
          }
  
        <h3>Suggested:</h3>
          { 
          
            game.tags.map(sugGame =>  (
                console.log(game.tags),
            <GameCard 
                key={sugGame.id}
                url={sugGame.image_background}
                game= {sugGame} />
               ))
          }
  
      </div>
    );
  }
  
  export default GamePage;
  
  
  
  