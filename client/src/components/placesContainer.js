import React, {Component} from 'react';

import moment from 'moment';
import {Button, Comment, Header, Form, Checkbox, Menu} from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';

import SearchComponent from './searchComponent'
import NewPlacesTable from './newPlacesTable'
import SavedPlacesTable from './savedPlacesTable'

class PlacesContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
          activePage: 'New Search',
          currentSearchTypes: {}
        }
    }

    createSearch = (search) => {
      console.log(search);
      this.setState({ currentSearchTypes: {...search.type}});
    }

    handleItemClick = (e, { name }) => this.setState({ activePage: name })

    render() {
      const { activePage } = this.state
      if (this.state.activePage == 'New Search') {
        return (
          <div>
            <Menu secondary style={{display: 'flex'}}>
              <Menu.Item name='New Search' active={activePage === 'New Search'} onClick={this.handleItemClick} />
              <Menu.Item name='Saved Searches' active={activePage === 'Saved Searches'} onClick={this.handleItemClick}/>
            </Menu>
            <SearchComponent
                createSearch={this.createSearch}
            />
            <NewPlacesTable
              places={this.props.places}
              types={this.state.currentSearchTypes}
            />
          </div>
        );
      } else if (this.state.activePage == 'Saved Searches') {
        return (
          <div>
            <Menu secondary style={{display: 'flex'}}>
            <Menu.Item name='New Search' active={activePage === 'New Search'} onClick={this.handleItemClick} />
            <Menu.Item name='Saved Searches' active={activePage === 'Saved Searches'} onClick={this.handleItemClick}/>
            </Menu>
            <SavedPlacesTable
              places={this.props.places}
            />
          </div>
        );
      }
    }
}

export default PlacesContainer;
