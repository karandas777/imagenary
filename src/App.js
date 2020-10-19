import React from "react";
import Footer from "./components/elements/Footer";
import Landing from "./components/pages/Landing";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search";
import Header from "./components/elements/Header";
import Topics from './components/pages/Topics';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/topics" component={Topics}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
