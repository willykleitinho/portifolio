import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledSection = styled.section`
  padding: 6rem 2rem;

  .container {
    max-width: 800px;
    margin: auto;
  }

  h2 {
    margin-bottom: 3rem;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 2rem;
    }
  }

  svg {
    margin-right: 1rem;
  }

  a {
    color: var(--clr-text);
    display: block;
    transition: transform 300ms;
    transform-origin: left;

    &:hover {
      color: var(--clr-primary);
      transform: scale(1.1);

      svg path {
        fill: var(--clr-primary) !important;
      }
    }
  }

  @media (min-width: 760px) {
    padding: 6rem 3rem;
  }
`;

export default function Contact() {
  return (
    <StyledSection id='contato'>
      <div className='container'>
        <h2>Contato</h2>
        <ul>
          <li>
            <a href='mailto:owellington.nascimento@gmail.com' title='Email'>
              <FontAwesomeIcon icon={faEnvelope} />
              owellington.nascimento@gmail.com
            </a>
          </li>
          <li>
            <a href='https://github.com/willykleitinho' title='Profile on Github'>
              <FontAwesomeIcon icon={faGithub} />
              github.com/willykleitinho
            </a>
          </li>
        </ul>
      </div>
    </StyledSection>
  );
}