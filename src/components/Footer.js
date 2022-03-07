import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: var(--clr-bg-front);
  font-size: 0.8rem;
`;

export default function Footer() {
  return (
    <StyledContainer>
      <motion.p transition={{ delay: 0.25 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        Imagem de fundo por <a href='www.freepik.com' title="Freepik's website">Freepik</a>.
      </motion.p>
    </StyledContainer>
  );
}