import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Trees from './trees';


class TreeComp extends Component {
    render() {

        return (
            <React.Fragment>
                <CssBaseline />
                <Trees></Trees>
                <br></br>
                <Container maxWidth="sm">
                </Container>
            </React.Fragment>

        );
    }
}

export default TreeComp;