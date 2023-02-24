import React from "react";
import ReactDOM from "react-dom/client"; 
import reportWebVitals from './reportWebVitals';
import{
    BrowserRouter as Router,
    Route,
    Switch
  
  } from "react-router-dom";
import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact";
 
 export default function Routing(){
    return(
    <div>
     <Router>
      <Switch>
        <Route exact path="/" component={Home } />
        <Route path="/about" component={About } />
        <Route path="/contact" component={Contact } />
        </Switch>
    </Router>  
    
    
    </div>    
    );
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Routing />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

