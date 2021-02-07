import React from 'react';
import reactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Hello from './mycomponents/Hello.js';
import Welcome from './mycomponents/Welcome.js';
import Refresh from './mycomponents/Refresh.js';
import A from './mycomponents/A.js';
import TestForm  from './mycomponents/TestForm.js';
import SignUp  from './mycomponents/SignUp.js';
import Textarea  from './mycomponents/Textarea.js';
import Select  from './mycomponents/Select.js';
import Count  from './mycomponents/Count.js';
import UseFontAwesome  from './mycomponents/UseFontAwesome.js';
import {fontAwesome} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import Header from './mycomponents/Header/Header';
import Content from './mycomponents/Content/Content';
import Footer from './mycomponents/Footer/Footer';
import List from './mycomponents/List';
import Jsonlist from './mycomponents/Jsonlist';
import About from './mycomponents/Pages/About';
import Blog from './mycomponents/Pages/Blog';
import Contact from './mycomponents/Pages/Contact';
import Home from './mycomponents/Pages/Home';
import Portfolio from './mycomponents/Pages/Portfolio';
import CountryList from './mycomponents/CountryList';
import PostDataServer from './mycomponents/PostDataServer';

import {BrowserRouter as Router, Switch, Route, link} from 'react-router-dom'



function App() {
  return (
    <div className="App">
    <CountryList></CountryList>
    <PostDataServer></PostDataServer>


    {/* <Router>
      <Route path="/" component={Home}>
        
      </Route>
    </Router> */}
   
     
      {/* <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>

          </Route>
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
