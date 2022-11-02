import React from 'react';
import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';

export function Notification({ message }) {
  return <Notific>{message}</Notific>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
