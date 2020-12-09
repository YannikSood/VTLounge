import React from 'react';
import { Form, Container, Row, Col, Accordion, Card, Button} from 'react-bootstrap';
import './HelpContainer.css'

class HelpContainer extends React.Component {

    render() {
        return (
            <div>
                <div className = "titleBox">
                    <Container>
                        <Row>
                            <Col>
                                <div className = "title">Need Help?</div>
                            </Col>
                            <Col>
                                <Form className = "searchBox">
                                    <Form.Control type = "search" placeholder = "Search Here" />
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className= "conentBox"> 
                <Accordion >
                    <Card className= "card">
                        <Accordion.Toggle as={Card.Header} eventKey="0" className="cardQuestion">
                            Can I Add A Class Or Major Lounge?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0" className="cardAnswer">
                            <Card.Body>Unfortunately, as a student, you cannot add additional Class or Major Lounges. Fill In</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className= "card">
                        <Accordion.Toggle as={Card.Header} eventKey="1" className="cardQuestion">
                            How Do I Add a Social Lounge?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" className="cardAnswer">
                            <Card.Body>Fill In</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className= "card">
                        <Accordion.Toggle as={Card.Header} eventKey="2" className="cardQuestion">
                            How Can I Message Someone From My Class?
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2" className="cardAnswer">
                            <Card.Body>Fill In</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className= "card">
                        <Accordion.Toggle as={Card.Header} eventKey="3" className="cardQuestion">
                            How Do I Use the "TA Office Hours" feature in Class Lounges? 
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3" className="cardAnswer">
                            <Card.Body>Fill In</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    
                </Accordion>
                </div>
            </div>
             
        );
    }
}

export default HelpContainer;