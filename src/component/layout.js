import React from "react";
import { Container } from "react-bootstrap";

const Layout = (p) =>{
    return(
        <Container>
            {p.children}
        </Container>
    )
}

export default Layout;