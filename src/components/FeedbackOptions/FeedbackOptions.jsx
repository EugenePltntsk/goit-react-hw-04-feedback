import React from 'react';
import PropTypes from 'prop-types';
import { Button, Li, List } from './FeedbackOptions.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <List>
      {options.map(item => (
        <Li key={item}>
          <Button name={item} type="button" onClick={onLeaveFeedback}>
            {item}
          </Button>
        </Li>
      ))}
    </List>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
