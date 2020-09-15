import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/homepage/Homepage";
import Projects from "./components/projects/Projects";
import Design from "./components/design/Design";

const NoMatch = () => (
  <div style={{ textAlign: "center", height: "90vh" }}>
    <h1 style={{ marginTop: "40vh" }}>
      I'm sorry the page you are looking for can not be found!
    </h1>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/design">
          <Design />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="*" component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
