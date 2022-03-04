import styled from 'styled-components';

const StyledSection = styled.section`
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
  }
`;

export default function About() {
  return (
    <StyledSection id='sobre-mim'>
      <div className='container'>
        <h2>Sobre mim</h2>
        <p>
          Sempre me interessei por tecnologia e programação, sempre acompanhando desde
          os 13 anos de idade. Porém só comecei a estudar mais a fundo aos 16 através
          do <a title='CS50x course homepage' target='_blank' rel='noreferrer' href='https://cs50.harvard.edu/x/'>CS50x</a>.
          <br />
          E atualmente estou focado em React JS e estudando UI/UX Design, pois desde
          sempre eu gosto de experimentar e criar coisas novas!
        </p>
      </div>
    </StyledSection>
  );
}