import React, { useEffect } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Alerts = ({ alert, message }) => {
  useEffect(() => {
    if (message && message.testMessage) {
      alert.success(message.testMessage);
    }
    if (message && message.errorMessage) {
      alert.error(message.errorMessage);
    }
  }, [message]);
  return <></>;
};

Alerts.propTypes = {
  message: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
