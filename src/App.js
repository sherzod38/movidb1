import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import {
  HomePage,
  MoviesPage,
  SingleMovies,
  PopularsPage
} from './pages'

import './assets/styles/main.scss';

import Header from './containers/Header';
import Sidebar from './containers/Sidebar';


function App() {

  const [ sidebarState, setSidebarState ] = useState(false);

return (
    <Router>

      <Header sidebarState={sidebarState} setSidebarState={setSidebarState}/>
      <Sidebar isOpened={sidebarState}/>

      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/movies" component={MoviesPage}/>
        <Route exact path="/populars" component={PopularsPage}/>
        <Route exact path="/movie/:id" component={SingleMovies}/>
      </Switch>
    </Router>
  );
}

export default App;
