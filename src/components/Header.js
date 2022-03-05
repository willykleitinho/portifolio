import styled from 'styled-components';

import { motion } from 'framer-motion';

const StyledHeader = styled.header`
  height: 80vh;
  padding: 0 2rem;
  
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: auto;
  }

  .title {
    color: var(--clr-primary);
    margin-bottom: 1rem;

    .small {
      display: block;
      color: var(--clr-text-primary);
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader id='home'>
      <motion.div className='container' transition={{ delay: 1 }} initial={{ x: '-100%' }} animate={{ x: 0 }}>
        <div className='info'>
          <h1 className='title' transition={{ delay: 2 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>
            <motion.span transition={{ delay: 2 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} className='small'>Olá! Meu nome é</motion.span>
            <motion.span transition={{ delay: 2 }} initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }}>Wellington Oliveira</motion.span>
          </h1>
          <motion.p transition={{ delay: 2 }} initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }}>
            Desenvolvedor web front-end
          </motion.p>
        </div>
      </motion.div>
    </StyledHeader>
  );
}