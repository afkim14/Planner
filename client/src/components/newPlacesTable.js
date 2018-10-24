import React, {Component} from 'react';

import moment from 'moment';
import {Button, Comment, Header, Form, Checkbox} from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';

class NewPlacesTable extends Component {

    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div style={{ display: 'flex', marginTop: "20px" }}>
          <div style={{ margin: "auto", width: 600 }}>
              <Comment.Group threaded>
                <Header as='h3' dividing>Places</Header>
                {this.props.places.map(place => {
                    if (this.props.types.study && place.type == "study") {
                      return (
                        <div key={`${place.id}-place-item`}>
                          <Comment>
                            <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                              <Comment.Author as='a'>{place.name}</Comment.Author>
                              <Comment.Metadata><span>{place.openHours}</span></Comment.Metadata>
                              <Comment.Text style={{color: "#BDB9B7"}}>{place.type}</Comment.Text>
                            </Comment.Content>

                            <Comment.Group>
                              <Comment>
                                <Comment.Content>
                                  <Comment.Text style={{marginTop: "-10px"}}>{place.description}</Comment.Text>
                                </Comment.Content>
                              </Comment>
                            </Comment.Group>
                          </Comment>
                        </div>
                      );
                    }
                  }
                )}
              </Comment.Group>
          </div>
        </div>
      );
    }
}

export default NewPlacesTable;
