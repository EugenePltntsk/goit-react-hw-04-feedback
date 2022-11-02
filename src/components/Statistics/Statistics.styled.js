import styled from 'styled-components';

export const Title = styled.h2``;
export const Span = styled.span`
  font-weight: ${props => (props.bold ? props.bold : 400)};
`;
