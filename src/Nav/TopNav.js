import React from 'react'
import SearchField from '.././components/SearchField'
import {Link} from 'react-router-dom'
class TopNav extends React.Component {
    navStyle ={
        color:'white'
    }
    render(){
        return (
            <nav className ="topbar">
                <div className = "topbar-container">
                    <Link to = "/" className = "navbar-logo">
                        <img className = "logo" src= "https://images.idgesg.net/images/article/2019/04/google-shift-100794036-large.jpg" alt = "logo"></img>
                    </Link>
                    <div className = 'searchbar'>
                      <SearchField searchGames = {this.props.searchGames}/>  
                    </div>
                    <div className = 'nav-links'>
                        <Link style={this.navStyle} to = '/'>
                            Login
                        </Link>
                        <Link style={this.navStyle} to = '/'>
                            Sign Up
                        </Link>
                        <Link style={this.navStyle} to = '/'>
                            About
                        </Link>
                    </div>
                </div>
            </nav>
         )
}
}   

export default TopNav
