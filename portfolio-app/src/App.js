import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";


function App (){

    return(
      <Router>
        <div>
        <NavBar />
        <Jumbotron />
        <Wrapper>
            <Route exact path= "/" component={About} />
            <Route exact path= "/About" component={About} />
            <Route path= "/Portfolio" component={Portfolio} />
            <Route path= "/Resume" component={Resume} />
            <Route path= "/Contact" component={Contact} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }

export default App;
  