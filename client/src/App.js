import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// use for later :
import {Button, Comment, Header, Form, Checkbox} from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';
import PlacesContainer from './components/placesContainer';

const placesQuery = gql`
  {
    places {
      id,
      name,
      description,
      type,
      openHours
    }
  }
`

class App extends Component {
  render() {
    // default props by graphql react apollo
    // console.log(this.props);
    const { data: { loading, places }} = this.props;
    if (loading) {
      return (
        <div className="App">
          loading
        </div>
      );
    } else {
      return (
        <PlacesContainer
          places={places}
        />
      );
    }
  }
}

// binds it to app (this.props)
export default graphql(placesQuery)(App);
