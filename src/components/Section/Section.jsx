import React from 'react';
import PropTypes from 'prop-types';
import { Sect, Title } from './Section.styled';

export function Section({ title, children }) {
  return (
    <Sect>
      <Title>{title}</Title>
      {children}
    </Sect>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
