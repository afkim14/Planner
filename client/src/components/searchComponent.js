import React, {Component} from 'react';

import moment from 'moment';
import {Button, Comment, Header, Form, Checkbox} from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class SearchComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
          ...this.emptySearch()
        }
    }

    emptySearch = () => {
      return {address: "", date: moment(), from: "", to: "", type: {ent: false, food: false, study: false}}
    }

    resetSearch = () => {
      this.setState({address: "", date: moment(), from: "", to: "", type: []});
    }

    changeNewAddress = (event) => {
        this.setState({address: event.target.value})
    }

    changeNewDate = (event) => {
        this.setState({date: event})
    }

    changeNewFrom = (event) => {
        this.setState({from: event.target.value})
    }

    changeNewTo = (event) => {
        this.setState({to: event.target.value})
    }


    changeEntertainment = (event) => {

        this.setState({to: event.target.value})
    }

    changeFood = (event) => {
        this.setState({to: event.target.value})
    }

    changeStudy = (event) => {
        this.setState({to: event.target.value})
    }

    getDateForDatePicker() {
        return moment(this.state.date)
    }

    createSearch = (event) => {
      // Fix form validation
      this.resetSearch();
      this.props.createSearch(this.state);
    }


    ent_toggle = () => this.setState({ type: {...this.state.type, ent: !this.state.type.ent }})
    food_toggle = () => this.setState({ type: {...this.state.type, food: !this.state.type.food }})
    study_toggle = () => this.setState({ type: {...this.state.type, study: !this.state.type.study }})

    render() {
      return (
        <div style={{ display: 'flex' }}>
          <div style={{ margin: "auto", width: 600 }}>
            <Header as="h1" dividing style={{marginTop: "10px"}}>AroundTown</Header>
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid placeholder='address or neighborhood'
                        value={this.state.address}
                        onChange={this.changeNewAddress}/>
                <DatePicker
                        selected={this.getDateForDatePicker()}
                        onChange={this.changeNewDate}/>
                <Form.Input fluid placeholder='from'
                        value={this.state.from}
                        onChange={this.changeNewFrom}/>
                <Form.Input fluid placeholder='to'
                        value={this.state.to}
                        onChange={this.changeNewTo}/>
              </Form.Group>
              <Form.Group inline>
                <label>Category</label>
                <Form.Field control={Checkbox} label={<label>Entertainment</label>} onChange={this.ent_toggle} ent_checked={this.state.ent_checked} />
                <Form.Field control={Checkbox} label={<label>Food</label>} onChange={this.food_toggle} food_checked={this.state.food_checked} />
                <Form.Field control={Checkbox} label={<label>Study</label>} onChange={this.study_toggle} study_checked={this.state.study_checked} />
              </Form.Group>
              <Form.Button onClick={this.createSearch}>Search</Form.Button>
            </Form>
          </div>
        </div>
      );
    }
}

export default SearchComponent;

// handleChange = (e, data) => {
//     console.log('it works');
//     console.log(data); // the data / props that passed to the component
// }
