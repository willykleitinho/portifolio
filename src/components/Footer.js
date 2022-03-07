import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledContainer = styled.footer`
  padding: 1rem;
  text-align: center;
  background: var(--clr-bg-front);
  font-size: 0.8rem;
  
  a {
    color: var(--clr-primary);

    &:hover {
      color: #FFF893;
    }
  }
`;

export default function Footer() {
  return (
    <StyledContainer>
      <motion.p transition={{ delay: 0.25 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        Imagem de fundo por <a href='https://www.rawpixel.com/sasi/showcase' title="Sasi's profile on rawpixel">Sasi (rawpixel.com)</a>.
      </motion.p>
    </StyledContainer>
  );
}