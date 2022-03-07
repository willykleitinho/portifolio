import styled from 'styled-components';

import AButton from './AButton';
import mainProjectImg from './assets/desktop/moviefliek.png';
import secondProjectImg from './assets/desktop/todo-app.png';
import thirdProjectImg from './assets/desktop/rest-countries-interface.png';

const StyledSection = styled.section`
  padding: 6rem 0;
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
  grid-template-columns: 4fr 5fr;
  gap: 2rem;
  margin-bottom: 4rem;
    
  .img {
    aspect-ratio: 16/9;
    background: #aaa;
    background: url(${mainProjectImg});
    background-size: cover;
    border: 4px solid white;

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
  }

  .lists {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;

    section {
      flex-basis: 100%;
    }

    ul {
      list-style-position: inside;
    }
  }
`;

const OtherProjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .img {
    aspect-ratio: 16/9;
    width: 100%;
    background: #aaa;
    background-size: cover !important;
    margin-bottom: 1rem;
    border: 4px solid white;

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
    background: url(${secondProjectImg});
  }

  .img-2 {
    background: url(${thirdProjectImg});
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--clr-primary);
  }

  ul {
    list-style-position: inside;
  }
`;

export default function Projects() {
  return (
    <StyledSection id='projetos'>
      <div className='container'>
        <h2>Projetos</h2>
        <MainProject>
          <div className='img'>
            <div className='buttons'>
            <AButton href='https://www.moviefliek.com' title='Go to MovieFliek website' target='_blank' rel='noreferrer'>Live</AButton>
            </div>
          </div>
          <div className='info'>
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
          </div>
        </MainProject>
        <OtherProjects>
          <article>
            <div className='img img-1'>
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
          </article>
          <article>
            <div className='img img-2'>
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
          </article>
        </OtherProjects>
      </div>
    </StyledSection>
  );
}