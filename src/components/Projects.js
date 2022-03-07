import styled from 'styled-components';
import { motion } from 'framer-motion';

import AButton from './AButton';

import mainProjectImgDesk from './assets/desktop/moviefliek.png';
import secondProjectImgDesk from './assets/desktop/todo-app.png';
import thirdProjectImgDesk from './assets/desktop/rest-countries-interface.png';
import mainProjectImgMob from './assets/mobile/moviefliek.png';
import secondProjectImgMob from './assets/mobile/todo-app.png';
import thirdProjectImgMob from './assets/mobile/rest-countries-interface.png';

const StyledSection = styled.section`
  padding: 6rem 2rem;
  background: var(--clr-bg-front);
  
  .container {
    max-width: 1100px;
    margin: auto;
  }

  h2 {
  text-align: center;
  color: var(--clr-primary);
  margin-bottom: 2rem;
  }
`;

const MainProject = styled.article`
  display: grid;
  gap: 2rem;
  margin: auto;
  margin-bottom: 4rem;
  max-width: 500px;
    
  .img {
    aspect-ratio: 375 / 670;
    background: #aaa;
    background: url(${mainProjectImgMob});
    background-size: cover;
    border: 4px solid var(--clr-text-primary);

    .buttons {
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      opacity: 0;
      transition: opacity 500ms;
    }

    &:hover .buttons {
      opacity: 1;
    }
  }

  h3 {
    color: var(--clr-primary);
    margin-bottom: 1rem;
  }

  h4 {
    color: #FFF893;
    margin-bottom: 0.5rem;
  }

  .lists {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    margin-top: 1rem;

    section {
      flex-basis: 100%;
    }

    ul {
      list-style-position: inside;
    }
  }

  @media (min-width: 465px) {
    .lists {
      flex-direction: row;
    }
    
    .img {
      aspect-ratio: 16/9;
      background: url(${mainProjectImgDesk});
      background-size: cover;
    }
  }

  @media (min-width: 1050px) {
    grid-template-columns: 4fr 5fr;
    max-width: none;
  }
`;

const OtherProjects = styled.div`
  display: grid;
  max-width: 500px;
  margin: auto;
  gap: 4rem;

  .img {
    aspect-ratio: 375 / 670;
    width: 100%;
    background: #aaa;
    background-size: cover !important;
    margin-bottom: 1rem;
    border: 4px solid var(--clr-text-primary);
    position: relative;

    p {
      position: absolute;
      top: -1.5rem;
      left: 0;
      font-size: 0.8rem;
      opacity: 0.75;

      a {
        color: var(--clr-primary);
      }

      &:hover {
        opacity: 1;
        
        a {
          transform: scale(2);
        }
      }
    }

    .buttons {
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      opacity: 0;
      transition: opacity 500ms;
    }

    &:hover .buttons {
      opacity: 1;
    }
  }

  .img-1 {
    background: url(${secondProjectImgMob});
  }

  .img-2 {
    background: url(${thirdProjectImgMob});
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--clr-primary);
  }

  h4 {
    color: #FFF893;
  }

  ul {
    list-style-position: inside;
  }

  @media (min-width: 465px) {
    .img {
      aspect-ratio: 16/9;
    }

    .img-1 {
      background: url(${secondProjectImgDesk});
    }

    .img-2 {
      background: url(${thirdProjectImgDesk});
    }
  }

  @media (min-width: 1050px) {
    grid-template-columns: 1fr 1fr;
    max-width: none;
    gap: 2rem;
  }
`;

export default function Projects() {
  return (
    <StyledSection id='projetos'>
      <div className='container'>
        <motion.h2 transition={{ delay: 0.5 }} initial={{ opacity: 0, y: -100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Projetos</motion.h2>
        <MainProject>
          <motion.div className='img' transition={{ delay: 0.5 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className='buttons'>
            <AButton href='https://www.moviefliek.com' title='Go to MovieFliek website' target='_blank' rel='noreferrer'>Live</AButton>
            </div>
          </motion.div>
          <motion.div className='info' transition={{ delay: 0.75 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3>MovieFliek</h3>
            <p>
              O MovieFliek é um webapp onde é possível criar,
              gerenciar e  deletar lists de filmes/séries favoritos,
              sugestões ou que você deseja assistir
              em algum momento.
              <br />
              Fiz o design da interface, o backend e o frontend,
              usando a OMDb API para pegar as informações dos
              filmes/séries.
            </p>
            <div className='lists'>
              <section>
                <h4>Features:</h4>
                <ul>
                  <li>Login / cadastro</li>
                  <li>Criar / deletar listas</li>
                  <li>Adicionar / excluir amigos</li>
                  <li>Enviar sugestões de filmes para amigos</li>
                  <li>Pesquisar filmes e séries</li>
                </ul>
              </section>
              <section>
                <h4>Feito com:</h4>
                <ul>
                  <li>React</li>
                  <li>Styled-components</li>
                  <li>React Router v6</li>
                  <li>Framer Motion</li>
                  <li>Axios</li>
                  <li>OMDb API</li>
                </ul>
              </section>
            </div>
          </motion.div>
        </MainProject>
        <OtherProjects>
          <motion.article transition={{ delay: 1 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className='img img-1'>
            <p>By <a href='https://www.frontendmentor.io/profile/willykleitinho' title='' target='_blank' rel='noreferrer'>Frontend Mentor</a></p>
              <div className='buttons'>
                <AButton href='https://festive-wozniak-3c6751.netlify.app/' title='Hosted on Netlify' target='_blank' rel='noreferrer'>Live</AButton>
                <AButton href='https://github.com/willykleitinho/todo-app-react' title='Go to Github repository' target='_blank' rel='noreferrer'>Github</AButton>
              </div>
            </div>
            <h3>Basic todo app (React)</h3>
            <section>
              <h4>Features:</h4>
              <ul>
                <li>Adicionar / remover itens da lista</li>
                <li>Marcar itens como completos</li>
                <li>Filtro de itens completos ou ativos</li>
                <li>Limpar itens completos</li>
                <li>Modo diurno / modo noturno</li>
              </ul>
            </section>
          </motion.article>
          <motion.article transition={{ delay: 1.25 }} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className='img img-2'>
            <p>By <a href='https://www.frontendmentor.io/profile/willykleitinho' title='' target='_blank' rel='noreferrer'>Frontend Mentor</a></p>
              <div className='buttons'>
                <AButton href='https://6222b29a748be5000854da5d--sharp-nightingale-e918a0.netlify.app/' title='Hosted on Netlify' target='_blank' rel='noreferrer'>Live</AButton>
                <AButton href='https://github.com/willykleitinho/rest-countries-api-interface' title='Go to Github repository' target='_blank' rel='noreferrer'>Github</AButton>
              </div>
            </div>
            <h3>REST Countries API interface (React)</h3>
            <section>
              <h4>Features:</h4>
              <ul>
                <li>Ver todos os países da API na homepage</li>
                <li>Pesquisar por algum país</li>
                <li>Filtar países por continente</li>
                <li>Ver informações detalhadas de um país em outra página</li>
                <li>Modo diurno / modo noturno</li>
              </ul>
            </section>
          </motion.article>
        </OtherProjects>
      </div>
    </StyledSection>
  );
}