import React from 'react';
import Home from './Home'
import About from './About'
import GamePage from './components/GamePage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component {
  render(){
    return (     
        <Router>
       
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
           <Route path='/game/:name' component={GamePage} />
          </Switch>
        </Router>

    );
  }
}
  export default App;

//   render() {
//     return (
//       <Router>
       
//         <Sidebar/>
//         <Switch>  
//           <Route path = "/" exact component = {Home}/>
//           <Route path = '/about' exact component ={About}/>
           
//         </Switch>
//       </Router>
//     );
//   }
// }


// export default App;