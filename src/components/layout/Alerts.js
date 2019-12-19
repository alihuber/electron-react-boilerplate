import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prev) {
    const { error, alert, message } = this.props;
    if (message !== prev.message) {
      if (message.testMessage) {
        alert.success(message.testMessage);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
