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

  @media (min-width: 760px) {
    padding: 0 3rem;
  }
`;

export default function Header() {
  return (
    <StyledHeader id='home'>
      <motion.div className='container' transition={{ delay: 1 }} initial={{ x: '-100%' }} animate={{ x: 0 }}>
        <div className='info'>
          <h1 className='title' transition={{ delay: 0 }} initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <motion.span transition={{ delay: 0.5 }} initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='small'>Olá! Meu nome é</motion.span>
            <motion.span transition={{ delay: 1 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Wellington Oliveira</motion.span>
          </h1>
          <motion.p transition={{ delay: 1 }} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Desenvolvedor web front-end
          </motion.p>
        </div>
      </motion.div>
    </StyledHeader>
  );
}