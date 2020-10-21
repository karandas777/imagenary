import React from "react";
import Footer from "./components/elements/Footer";
import Landing from "./components/pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search";
import Topics from './components/pages/Topics';
import TopicDetails from "./components/pages/TopicDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/topics" component={Topics}/>
        <Route exact path="/topic-details/:id/:name" component={TopicDetails}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
