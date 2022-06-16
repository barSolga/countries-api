import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
        <h1>Where in the world?</h1>
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

export default Navbar