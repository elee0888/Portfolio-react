import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {Layout} from './component/Layout';
import { NavigationBar } from './component/NavigationBar';
import { Jumbotron } from './component/Jumbotron';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{

  render(){
    return(
      <React.Fragment>
        <NavigationBar />
        <Jumbotron />
       <Layout>
        <Router>
          <Switch>
            <Route exact path= "/" component={Home} />
            <Route path= "/about" component={About} />
            <Route path= "/contact" component={Contact} />
           </Switch>
        </Router>
       </Layout>
      </React.Fragment> 
    

    );
  }
}

export default App;
  