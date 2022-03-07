import styled from 'styled-components';

import { motion } from 'framer-motion';

const StyledSection = styled(motion.section)`
  background: var(--clr-bg-front);
  padding: 6rem 2rem;
  padding-bottom: 3rem !important;
  
  .container {
    max-width: 800px;
    /* margin: auto;
    text-align: right; */
  }

  h2 {
    color: var(--clr-primary);
    margin-bottom: 1rem;
  }

  p {
    margin-left: auto;
    max-width: 550px;
  }

  a {
    color: var(--clr-primary);

    &:hover {
      color: #FFF893;
    }
  }

  @media (min-width: 500px) {
    .container {
      text-align: right;
    }
  }

  @media (min-width: 760px) {
    padding: 6rem 3rem;

    .container {
      margin: auto;
      text-align: right;
    }
  }
`;

export default function About() {
  return (
    <StyledSection id='sobre-mim'>
      <div className='container'>
        <motion.h2 transition={{ delay: 0.5 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>Sobre mim</motion.h2>
        <motion.p transition={{ delay: 0.75 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
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