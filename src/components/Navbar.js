import styled from 'styled-components';

// import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  max-width: 800px;
  margin: auto;
  /* display: flex; */
  /* breaks at less than 600 */
  display: none;
  justify-content: flex-end;
  z-index: 1;

  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
    position: relative;
    padding: 0.5rem 1rem;
    padding-left: 5rem;
    clip-path: polygon(0 0, 300% 0%, 300% 100%, 12% 99%);
    background-color: #2c3633;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 100%;
      width: 100%;
      height: 100%;
      background-color: inherit;
    }

    li {
      padding: 0.5rem 1rem;
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 5px;
        width: 0%;
        background-color: var(--clr-text-primary);
        transition: background-color 1s, transform 300ms;
        width: 100%;
        transform: scaleX(0);
      }

      &:hover {
        &::after {
          transform: scaleX(1);
          background-color: var(--clr-primary);
        }

        a {
          color: var(--clr-primary);
          transition: color 1s;
        }
      }
    }

    a {
      text-decoration: none;
      color: var(--clr-text-primary);
    }
  }

  @media (min-width: 600px) {
    display: flex;
  }
`;

export default function Navbar() {
  return (
    <StyledNav>
      <motion.ul transition={{ delay: 1 }} initial={{ x: '100%' }} animate={{ x: 0 }}>
        <li>
          <a href='#home'>home</a>
        </li>
        <li>
          <a href='#sobre-mim'>sobre mim</a>
        </li>
        <li>
          <a href='#projetos'>projetos</a>
        </li>
        <li>
          <a href='#contato'>contato</a>
        </li>
      </motion.ul>
    </StyledNav>
  );
}