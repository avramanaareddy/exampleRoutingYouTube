import React from "react";
import "./styles.css";
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import ItemDetails from './ItemDetails'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:itemId" component={ItemDetails}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home=()=>{
return(<div>
<h1> This is Home Page</h1>
</div>)
}
