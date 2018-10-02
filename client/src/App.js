import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import MomSubmit from "./components/MomSubmit";
import Intro from "./components/Intro";
import StoryPage from "./components/StoryPage";
import StoryControl from "./components/StoryControl";
import Footer from "./components/Footer";
import Sample from "./components/Sample";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route exact path="/MomSubmit" component={MomSubmit} />
        <Route exact path="/StoryPage" component={StoryPage} />
        <Route exact path="/StoryControl" component={StoryControl} />
      </Switch>
      <div className="footer">
        <Footer />
      </div>
    </div>
  </Router>
);

export default App;
