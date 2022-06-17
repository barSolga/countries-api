import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <a href="/" style={{ textDecoration:'none' }}>
            <Heading>Where in the world?</Heading>
        </a>
        <Btn>
            <i className='bx bx-moon'></i>
            &nbsp;
            Dark Mode
        </Btn>
    </Nav>
  )
}

// styled components
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2em;
    background-color: var(--white);
    box-shadow: var(--shadow);
    @media screen and (min-width: 768px) {
        padding: 2em 3em;
    }
`;

const Btn = styled.button`
    display: flex;
    align-items: center;
    padding: 1em;
    border: none;
    background: none;
    cursor: pointer;
    transition: transform .3s;
    &:hover {
        transform: scale(1.1);
    }
`;

const Heading = styled.h1`
    @media screen and (min-width: 768px) {
        font-size: 2.5rem;
    }
`

export default Navbar