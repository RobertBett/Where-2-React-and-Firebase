import React from 'react';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Route, Switch, Redirect } from 'react-router-dom';
import SettingsNav from './SettingsNav';
import { styles } from '../../../utils/styles';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';


const SettingsDashboard = (props) => {
  const { classes } = props;
  return (
    <div className={classes.EventRoot}>
      <Grid justify="center" container spacing={8}>
        <Grid item xs={10}>
          <Switch>
            <Redirect exact from="/settings" to="/settings/basic" />
            <Route path="/settings/basic" component={BasicPage} />
            <Route path="/settings/about" exact component={AboutPage} />
            <Route path="/settings/photos" exact component={PhotosPage} />
            <Route path="/settings/account" exact component={AccountPage} />
          </Switch>
        </Grid>
        <Grid item xs={2}>
          <SettingsNav />
        </Grid>
      </Grid>
    </div>
  );
};

SettingsDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SettingsDashboard);