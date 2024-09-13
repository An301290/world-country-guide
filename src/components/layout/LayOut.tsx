import React from 'react';
import {Container, Box} from '@mui/material';
import NavBar from "./NavBar";

const Layout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>
            <NavBar/>
            <Container>
                <Box my={2}>
                    {children}
                </Box>
            </Container>
        </>
    );
};

export default Layout;