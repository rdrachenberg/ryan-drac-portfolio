import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

export class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="black" className="font-small pt-4 mt-4" fixed="bottom">
                <Container fluid className="text-center text-md-center">
                    <Row>
                        <Col sm="4" id="footer-title-col">
                        <h5 className="footer-title"><a href="https://ryan-drac-port.herokuapp.com/">Ryan Drachenberg</a></h5>
                        </Col>
                        <Col sm="4">
                        <ul className="footer-links">
                        <h5><li className="list-unstyled"><a href="https://github.com/rdrachenberg" target="_blank" rel="noopener noreferrer">GitHub</a></li></h5>
                        <h5><li className="list-unstyled"><a href="https://www.linkedin.com/in/ryan-drachenberg/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li></h5>
                        <h5><li className="list-unstyled"><a href="https://stackexchange.com/users/11861252/ryan-d" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li></h5>
                        </ul>
                        </Col>
                        <Col sm="4" className="copy-right">
                    <div className="footer-copyright text-center py-3">
                        <Container fluid>
                        <h5> &copy; {(new Date().getFullYear())} Copyright </h5>
                        </Container>
                    </div>
                    </Col>
                    </Row>
                </Container>
            </Footer>
        );
    }
}

