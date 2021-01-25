import React from 'react';
import axios from 'axios';
import GameContainer from './components/GameContainer'
import TopNav from './Nav/TopNav'

import './App.css'
class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            games : [],

        }
    }
    //switch statement
    // need axios to get the api and show the games
searchGames =(name,type) =>{
    switch(type) {
        case 0: 
        this.search(name);
        break;
        default:       
        this.popular();
        break;
    }
}
//
search = (name) =>{
    // console.log(name)
    name = name.split(' ').join('-').toLowerCase();
    axios.get(`https://rawg.io/api/games?search=${name}?key=be45f84dfb534f80946fa81cf7679f7d`)
    .then(data =>{
        this.setState({games: data.data.results})
       console.log(this.state.games)
    })
         
    
    .catch(
        err => console.log('error')
    )

}

popular = () =>{
    axios.get(`https://rawg.io/api/collections/must-play/games?key=be45f84dfb534f80946fa81cf7679f7d`)
    .then(data =>{
       this.setState({games: data.data.results})
      //  console.log(this.state.games)
        console.log('Trending called' )
       
    })
         
    
    .catch(
        err => console.log('error')
    )

}

componentDidMount(){
    this.searchGames();

  }
    render() {

        return (
            <div className = "container">
                 <TopNav 
                 games= {this.state.games}
                 searchGames = {this.searchGames}/>
                <h2>Home Page</h2>

                <div className ="img-container">

                <GameContainer games = {this.state.games}
                searchGames = {this.searchGames}/>
                </div>

            </div>
        )

    }
}
export default Home 

