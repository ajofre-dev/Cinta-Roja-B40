import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MainContainer from './Containers/MainContainer/MainContainer'
import AddTaskContainer from './Containers/AddTaskContainer/AddTaskContainer'
import NotFound from './Containers/NotFound/NotFound'
import AppNav from './Components/AppNav/AppNav'
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <AppNav />
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/add-task" component={AddTaskContainer} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
