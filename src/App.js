import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



import './App.css';
import Layout from './components/Layout';
import Search from './components/Search';

class App extends Component {
  render() {
    return (

      <Router>

      <Layout>

    
      <Switch>
 
 <Route exact path="/"   />
 
 <Route exact path="/search"  component={() => <Search/>}  />



</Switch>




 

      </Layout>
    



  
     


    </Router>
      
     
    );
  }
}

export default App;
