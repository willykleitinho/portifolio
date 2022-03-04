import styled from 'styled-components';

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

    span {
      display: block;
      color: var(--clr-text-primary);
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <div className='container'>
        <div className='info'>
          <h1 className='title'>
            <span>Olá! Meu nome é</span>
            Wellington Oliveira
          </h1>
          <p>
            Desenvolvedor web front-end
          </p>
        </div>
      </div>
    </StyledHeader>
  );
}