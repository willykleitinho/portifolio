import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const StyledSection = styled.section`
  padding: 6rem 0;

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
`;

export default function Contact() {
  return (
    <StyledSection id='contato'>
      <div className='container'>
        <h2>Contato</h2>
        <ul>
          <li>
            <FontAwesomeIcon icon={faEnvelope} />
            email@gmail.com
          </li>
          <li>
            <FontAwesomeIcon icon={faLinkedin} />
            Lindkedin.com/willye
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            Github.com/willykleitinho
          </li>
        </ul>
      </div>
    </StyledSection>
  );
}