const ipc = require('electron').ipcRenderer;
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from '../store';
import { createMessage } from '../actions/messages';
import Alerts from './layout/Alerts';
import '../index.css';

const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(),
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#8bf6ff',
      main: '#4fc3f7',
      dark: '#0093c4',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#5b36e2',
      main: '#0000af',
      dark: '#00007e',
      contrastText: '#ffffff',
    },
  },
});

const sendMessage = () => {
  ipc.send('hello-message');
};

class App extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <MuiThemeProvider theme={theme}>
            <Alerts />
            <div className={classes.root}>
              <Button variant="outlined" color="primary" className={classes.button} onClick={sendMessage}>
                Primary
              </Button>
            </div>
            <div className={classes.root}>
              <Button
                variant="outlined"
                color="secondary"
                className={classes.button}
                onClick={() => store.dispatch(createMessage({ testMessage: 'Hello from test!' }))}
              >
                Test alert
              </Button>
            </div>
          </MuiThemeProvider>
        </AlertProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
