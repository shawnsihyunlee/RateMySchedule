import BottomNav from "./BottomNav";
import Header from "./Header";
import React from 'react';
import MySchedule from "./MySchedule";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Rating from '@mui/material/Rating'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import data from '../assets/exampleSchedule.json';
import {parseScheduleData} from './ScheduleParserFinal';

export default function MySchedulePage(){

  let e = parseScheduleData(data);

  return(
    <>
      <Header/>
      <Container>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital@1&display=swap');
      </style>
      <Row>
        <Col className="text-center">
        <h2>Your Schedule</h2> 
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
            <Card>
            <Card.Body>
                <MySchedule events = {e}/>
            </Card.Body>
            </Card>
        </Col>
        <Col lg={4}>
            <Row className="text-center">
                <h5>
                <Badge pill bg="secondary" style = {{margin: "5px"}}>
                    Year: Junior
                </Badge>{' '}
                <Badge pill bg="secondary" style = {{margin: "5px"}}>
                    Major: ECE
                </Badge>{' '}
                <Badge pill bg="secondary" style = {{margin: "5px"}}>
                    GPA: 3.67
                </Badge>{' '}
                </h5>
            </Row>
            <Row className = "text-center">
                <p>Your schedule was rated by 28 people!</p>
            </Row>
            <Row>
            <Accordion alwaysOpen  style={{verticalAlign: "middle"}}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Academic Difficulty: <Rating name={"read-only"} value={3.5} precision= {0.1} readOnly style={{marginLeft: "5px"}} /> </Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item>Course Difficulty: <Rating name={"read-only"} value={4} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                  <ListGroup.Item>Workload: <Rating name={"read-only"} value={4} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                  <ListGroup.Item>Professor Difficulty: <Rating name={"read-only"} value={1} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Accessibility Difficulty: <Rating name={"read-only"} value={2} precision= {0.1} readOnly style={{marginLeft: "5px"}}/> </Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item>Commute Times: <Rating name={"read-only"} value={3} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                  <ListGroup.Item>Morning/Evening Classes: <Rating name={"read-only"} value={2} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                  <ListGroup.Item>Lunch Breaks: <Rating name={"read-only"} value={1} readOnly style={{marginLeft: "5px"}}/></ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header> Comments </Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                  <ListGroup.Item>bro you're gonna die</ListGroup.Item>
                  <ListGroup.Item>what are you? hermione granger?</ListGroup.Item>
                  <ListGroup.Item>trying to graduate in two years i see</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              </Accordion>
            </Row>
            {/* <Row className = "text-center">
              <p><small>Higher ratings are worse.</small></p>
            </Row> */}
            <Row className = "text-center" style= {{marginTop:"20px",  fontFamily:'Montserrat', fontSize: "20px"}}>
              <p><small>Higher ratings are worse.</small></p>
            </Row>
            <Row className = "text-center" style = {{border:"1px", color:"black"}}>
              <div className = "text-center" style= {{marginBottom: "0px", fontFamily:'Montserrat', fontSize: "16px"}}>
                <p><small>Daily Thought of the Semester:</small></p>
              </div>
              <div className = "text-center" style= {{marginTop: "0px", fontFamily:'Montserrat', fontSize: "30px"}}>
                <p><small>Oh my god. Help.</small></p>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      
      <BottomNav/>
    </>
  );
}