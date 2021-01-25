import React from 'react';

class SearchField extends React.Component {
    state = {
        search: "",
        isEmpty: true
    }

    onSubmit = (input) =>{
        input.preventDefault();
     
        if(this.state.search === ""){
            this.setState({isEmpty: true});
            this.props.searchGames(this.state.search);
        }
        else{
             this.setState({isEmpty: false});
             this.props.searchGames(this.state.search, 0);
        }
    }

    onChange = (input) =>{
        this.setState({[input.target.name]: input.target.value,  isEmpty: true});
        // console.log(input.target.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <input type='text' 
                name="search" 
                value={this.state.search} 
                onChange={this.onChange} 
                placeholder={this.state.isEmpty ? "Search..." : this.state.search}
                />
                <input type='submit' value="submit"/>
                </form>
                
            </div>
        )
    }
}


export default SearchField;