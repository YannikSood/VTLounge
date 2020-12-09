import React from 'react';
import './ClassLoungesContainer.css'
import { Container, Row, Col, Button, Accordion, Card} from 'react-bootstrap';


//We need to have the button on line 24 send page navigaiton from ClassLounges to ClassLounge2114
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
                            <div className = "gap"/>
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
                            <Card bg = "success" style={{ width: '18rem', height: '12rem'}}>
                                <Card.Body>
                                    <Card.Title>MATH 2204</Card.Title>
                                    <Card.Text>
                                        MATH 2204: Intro Multivariable Calculus
                                    </Card.Text>
                                    <Button variant = "light" >Open Lounge</Button>
                                </Card.Body>
                            </Card>
                            <div className = "gap"/>
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
                        <Col className = "announcements">
                            <div className = "announcementsHeader">
                                Announcements
                            </div>
                            <Accordion className = "accordion">
                                <Card>
                                    <Card.Header>
                                        <div className = "aCourse">
                                                CS 2114
                                        </div>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <div className = "aTitle">
                                                Upcomming Online Help Session on 12/10 for Final Exam 
                                            </div>
                                        </Accordion.Toggle>
                                        <div className = "aDate">
                                                Posted: 12/6
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <div className = "aCourse">
                                                MATH 2204
                                        </div>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <div className = "aTitle">
                                                Homework 14 Announcement 
                                            </div>
                                        </Accordion.Toggle>
                                        <div className = "aDate">
                                                Posted: 12/5
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card>
                                    <Card.Header>
                                        <div className = "aCourse">
                                                MUS 1104
                                        </div>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            <div className = "aTitle">
                                                Disscussion Prompt 11 Reminder
                                            </div>
                                        </Accordion.Toggle>
                                        <div className = "aDate">
                                                Posted: 12/4
                                        </div>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>

                </Container>
                

                
            </div>

            
        )
    }
}

export default ClassLoungesContainer
