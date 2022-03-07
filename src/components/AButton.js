import styled from 'styled-components';

const AButton = styled.a`
  color: black;
  text-decoration: none;
  display: inline-block;
  padding: 0.5rem 2.5rem;
  background: var(--clr-text-primary);
  transition: clip-path 100ms, transform 100ms;
  clip-path: polygon(20% 0%, 80% 0, 80% 100%, 20% 100%);
  
  &:hover {
    transform: scale(1);
    clip-path: polygon(15% 0, 100% 0, 85% 100%, 0 100%);;
  }
`;

export default AButton;