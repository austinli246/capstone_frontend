import React, { Component } from 'react'
import GameCard from './GameCard';
import NoGame from './NoGame'


class GameContainer extends Component {

    showGame = () =>{
        let result = this.props.games;
     //   console.log(result.length)
    //    console.log(result)
        let game;

        // if(this.props.rand !== ""){
        //      game = <GameCard url={this.props.rand} key={1}/>
        //     return game;
        // }
        if(result.length > 0){
        //    if (this.props.type ===0){
        //     game = result.map(game =>(
        //     <GameCard url={game.background_image} key={game.id}/>
        //     ))
           //} 
        //    else{
               game = result.map(game =>(
                //    console.log(game.background_image),
                   <GameCard 
                    key={game.id}
                    url={game.background_image}
                    game= {game} />
                   ))
                // }
        }
        else{
           game = <NoGame />
        }
        return game;
    }

    render() {
        return( 
                this.showGame()
            ); 
    }
            
        
}

export default GameContainer;