import React, {Fragment} from 'react'
import { render } from 'react-dom'
import styled from 'styled-components'

let Header = () =>  {
        return (
            <Container>
                <Nav>
                    
                </Nav>
            </Container>
        )
}

export default Header;

const Container = styled(Fragment)`
    right: 0;
    left: 0;
    top: 0;
    height: 80px;
    background: #000;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;

    p {
        color: white;
        font-size: 16px;
    }
`;
