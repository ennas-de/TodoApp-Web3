import { Link } from 'react-router-dom';
import {Box, styled} from "@mui/material";

const StyledBox = styled("Box")(({theme}) => ({
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '0rem',
    marginTop: '0rem',
    width: '100vw',
    height: '20vh',
    alignContent: 'center'
}))

const Header = () => {
    return (
        <StyledBox>
            <h1> Todo Tasks</h1>
        </StyledBox>
    )
}

export default Header;