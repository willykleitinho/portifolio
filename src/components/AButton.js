import styled from 'styled-components';

const AButton = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #ccc;
  
  &:hover {
    background: #fff;
    transform: scale(1.1);
  }
`;

export default AButton;