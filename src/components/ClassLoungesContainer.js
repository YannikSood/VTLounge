import React from 'react';
import './ClassLoungesContainer.css'
import { Container, Row, Col, Button, Accordion, Card} from 'react-bootstrap';


class ClassLoungesContainer extends React.Component {

    render() {
        return (
            <div className = "page">
                <div className = "headerBar">
                    Class Lounges
                </div>
                <Container className = "pageConent">
                    <Row>
                        <Col className = "columnOne">
                            <Card bg = "info" style={{ width: '18rem', height: '12rem'}}>
                                <Card.Body>
                                    <Card.Title>CS 2114</Card.Title>
                                    <Card.Text>
                                        CS2114: Software Design and Data Structures
                                    </Card.Text>
                                    <Button variant = "light" >Open Lounge</Button>
                                </Card.Body>
                            </Card>

                        </Col>         
                        <Col>
                            <Card bg = "success" style={{ width: '18rem', height: '12rem'}}>
                                <Card.Body>
                                    <Card.Title>MATH 2204</Card.Title>
                                    <Card.Text>
                                        MATH 2204: Intro Multivariable Calculus
                                    </Card.Text>
                                    <Button variant = "light" >Open Lounge</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className = "announcements">
                            <div className = "announcementsHeader">
                                Announcements
                            </div>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            Click me!
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Click me!
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Click me!
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card bg = "warning" style={{ width: '18rem', height: '12rem'}}>
                                <Card.Body>
                                    <Card.Title>MUS 1104</Card.Title>
                                    <Card.Text>    
                                        MUS 1104: Music Appreciation
                                    </Card.Text>
                                    <Button variant = "light" >Open Lounge</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card bg = "secondary" style={{ width: '18rem', height: '12rem'}}>
                                <Card.Body>
                                    <Card.Title>PHIL 1204</Card.Title>
                                    <Card.Text>
                                        PHIL 1204: Knowledge and Reality
                                    </Card.Text>
                                    <Button variant = "light" >Open Lounge</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>

                </Container>
                

                
            </div>

            
        )
    }
}

export default ClassLoungesContainer
