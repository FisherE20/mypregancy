import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
// import Journal from "./pages/Journal";
import Gallery from "./pages/Gallery";
import Registry from "./pages/Registry";
import Contact from "./pages/Contact";






function App() {

  return (
    <Router>
      <div>
        
        <Switch> 
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/gallery" component={Gallery} />
          {/* <Route exact path="/journal" component={Journal} /> */}
          <Route exact path="/registry" component={Registry} />
          <Route exact path="/contact" component={Contact} />
        </Switch> 
      </div>
    </Router>
  );
}

export default App;
