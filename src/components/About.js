import styled from 'styled-components';

import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)`
  background: var(--clr-bg-front);
  padding: 6rem 0;
  .container {
    max-width: 800px;
    margin: auto;
    text-align: right;
    
    h2 {
      color: var(--clr-primary);
      margin-bottom: 1rem;
    }

    p {
      max-width: 70%;
      margin-left: auto;
    }

    a {
      color: var(--clr-primary);

      &:hover {
        color: #FFF893;
      }
    }
  }
`;

export default function About() {
  return (
    <StyledSection id='sobre-mim'>
      <div className='container'>
        <motion.h2 transition={{ delay: 1 }} initial={{ opacity: 0, x: '-200%' }} animate={{ opacity: 1, x: 0 }}>Sobre mim</motion.h2>
        <motion.p transition={{ delay: 1 }} initial={{ opacity: 0, x: '200%' }} animate={{ opacity: 1, x: 0 }}>
          Sempre me interessei por tecnologia e programação, sempre acompanhando desde
          os 13 anos de idade. Porém só comecei a estudar mais a fundo aos 16 através
          do <a title='CS50x course homepage' target='_blank' rel='noreferrer' href='https://cs50.harvard.edu/x/'>CS50x</a>.
          <br />
          E atualmente estou focado em React JS e estudando UI/UX Design, pois desde
          sempre eu gosto de experimentar e criar coisas novas!
        </motion.p>
      </div>
    </StyledSection>
  );
}