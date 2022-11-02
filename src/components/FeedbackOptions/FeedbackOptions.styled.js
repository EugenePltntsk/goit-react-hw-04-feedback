import styled from 'styled-components';
import image from '../../images/pngwing.com.png';
import { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { opacity: 1}
 30% { opacity: 0 }
 50% { opacity: 1; }
 70% { opacity: 0  }
 100% {opacity: 1; }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 50px;
`;

export const Li = styled.li``;

export const Button = styled.button`
  width: 130px;
  height: 130px;
  background-color: transparent;
  background-image: url(${image});
  background-size: 150%;
  background-position: center;
  border: none;
  outline: none;
  font-weight: bold;
  transition: all 3000ms linear;

  &:hover {
    transform: rotate(200deg);
    animation: 2000ms linear infinite ${breatheAnimation};
  }
`;

export const Span = styled.span``;
