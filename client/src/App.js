import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/header/index"
import Footer from "./component/footer/index"
import Home from "./pages/index/index"
import Contacts from "./pages/contacts/contacts"
import Portfolio from "./pages/portfolio/portfolio"

function App() {
  return (
    <Router>
    <div>
      <Header />


      <Route exact path="/" component={Home} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contacts" component={Contacts} />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
