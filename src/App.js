import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Icon, Label ,Card,Image,Segment, Grid,Header,Item} from 'semantic-ui-react'

import Layout from './hoc/Layout/Layout'
import HomeContainer from './Container/HomeContainer';
import UserContainer from './Container/UserContainer';
import AlbumContainer from './Container/AlbumContainer';


import { Route, Switch } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/users" component={UserContainer} />
            <Route path="/albums" component={AlbumContainer} />
            <Route path="/" exact component={HomeContainer} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
