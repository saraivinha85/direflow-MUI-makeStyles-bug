import React from 'react';
import PropTypes from 'prop-types';

import { withStyles, makeStyles } from '@material-ui/core/styles'

const App = (props) => {

  return (
      <div className={props.classes.root}>
	  Hello
      </div>
  );
};


const styles = makeStyles({
	root: {
		backgroundColor: 'red'
	}
})

App.defaultProps = {
  componentTitle: 'Bug1 Component',
  sampleList: [
    'Create with React',
    'Build as Web Component',
    'Use it anywhere!',
  ],
}

App.propTypes = {
  componentTitle: PropTypes.string,
  sampleList: PropTypes.array,
};

export default withStyles(styles)(App);
