import { Span } from './Statistics.styled';

import React from 'react';
import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positive }) {
  return (
    <>
      <Span>Good: {good} </Span>
      <Span>Neutral: {neutral}</Span>
      <Span>Bad: {bad}</Span>
      <Span>Total: {total}</Span>
      <Span bold="bold">Positive percentage: {positive || 0}%</Span>
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
