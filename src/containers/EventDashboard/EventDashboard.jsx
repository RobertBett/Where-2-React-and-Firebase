import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddEventIcon from '@material-ui/icons/EventAvailable';
import Trending from '@material-ui/icons/TrendingUp';
import cuid from 'cuid';
import { styles } from '../../utils/styles';
import Eventlist from './EventList/Eventlist';
import EventForm from './EventForm/EventForm';
import TabContainer from '../../utils/TabContainer';

class EventDashboard extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      selectedEvent: null,
      events: [
        {
          id: '1',
          title: 'Trip to Tower of London',
          DateTime: '2018-03-27T11:00:00+00:00',
          eventPhotos: [
            {
              id: 1,
              imgPath: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            {
              id: 2,
              imgPath: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',

            },
          ],
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Tower of London, St Katharine\'s & Wapping, London',
          hostedBy: 'TOM',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
          favoritedBy: [
            1, 2, 3, 4, 4, 5, 5,
          ],
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
          ],
        },
        {
          id: '2',
          title: 'Trip to Tower of London',
          DateTime: '2018-03-27T11:00:00+00:00',
          eventPhotos: [
            {
              id: 1,
              imgPath: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            },
            {
              id: 2,
              imgPath: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',

            },
          ],
          category: 'culture',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
          city: 'London, UK',
          venue: 'Tower of London, St Katharine\'s & Wapping, London',
          hostedBy: 'Bob',
          hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
          favoritedBy: [
            1, 2, 3,
          ],
          attendees: [
            {
              id: 'a',
              name: 'Bob',
              photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            },
            {
              id: 'b',
              name: 'Tom',
              photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
            },
          ],
        },
      ],
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleCreateEvent = (createdEvent) => {
    const newEvent = createdEvent;
    newEvent.id = cuid();
    newEvent.eventPhotos = [
      {
        id: cuid(),
        imgPath: 'https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
      {
        id: cuid(),
        imgPath: 'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
      },
      {
        id: cuid(),
        imgPath: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
      },
    ];
    newEvent.attendees = [
      {
        id: cuid(),
        name: 'Angela',
        imgPath: 'https://randomuser.me/api/portraits/women/6.jpg',
      },
      {
        id: cuid(),
        name: 'isabella',
        imgPath: 'https://randomuser.me/api/portraits/women/92.jpg',
      },
    ];
    newEvent.favoritedBy = [];
    const updatedEvents = [...this.state.events, newEvent]; //eslint-disable-line
    console.log(updatedEvents, '[CVKEJR BRJEKBER]');
    this.setState({ events: updatedEvents });
  }

  handleEditEvent = eventToUpdate => () => {
    console.log(eventToUpdate, '[EVENBT TOT ]');
    this.setState({ selectedEvent: eventToUpdate });
  }

  render() {
    const { classes } = this.props;
    const { value, selectedEvent } = this.state;
    return (
      <div className={classes.EventRoot}>
        <Grid container spacing={32}>
          <Grid item xs={8}>

            <Eventlist editEvent={this.handleEditEvent} events={this.state.events} />
          </Grid>
          <Grid item xs={4}>
            <AppBar position="static" color="primary">
              <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                variant="fullWidth"
                indicatorColor="secondary"
              >
                <Tab label="Trending Events" icon={<Trending />} />
                <Tab label="Create Event" icon={<AddEventIcon />} />
              </Tabs>
              { value === 0
                && (
                  <TabContainer>
                    <Paper className={classes.paper}>
                    Whats Trending
                    </Paper>
                  </TabContainer>
                )
              }
              { value === 1
              && (
                <TabContainer>
                  <EventForm selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} />
                </TabContainer>
              )}
            </AppBar>
          </Grid>
        </Grid>
      </div>
    );
  }
}

EventDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EventDashboard);
