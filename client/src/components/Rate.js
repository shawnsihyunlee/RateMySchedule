import React, { useState, useEffect } from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Rating from '@mui/material/Rating'
import ListGroup from 'react-bootstrap/ListGroup';
import MySchedule from "./MySchedule";
import {parseScheduleData} from './ScheduleParserFinal';
import data from "../assets/exampleSchedule.json";
import jsons from "./ScheduleJsons";


export default function Rate () {

  let yearLevel = ["Freshman", "Sophomore", "Junior", "Senior"];
  let majors = ["CS", "MechE", "ChemE", "ECE", "Physics", 
                "Chemistry", "CivE", "Business", "Design", "Architecture", 
                "StatML", "Math", "Biology"];

  let e = parseScheduleData(jsons[Math.floor(Math.random()*jsons.length)]);

  //Academic Difficulties
  const [courseDiff, setCourseDiff] = useState(0);
  const [workDiff, setWorkDiff] = useState(0);
  const [profDiff, setProfDiff] = useState(0);

  //Time Difficulties
  const [commuteDiff, setCommuteDiff] = useState(0);
  const [mornDiff, setMornDiff] = useState(0);
  const [lunchDiff, setLunchDiff] = useState(0);

  
  //Credits
  const [credits, setCredits] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("credits");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("credits", JSON.stringify(credits));
  }, [credits]);

  const handleClick = ()=>{
    console.log("Clicked!");
    setCredits(credits + 1);
  }

  return (
    <div>
      <Header/>
      <Container>
                
                <Row>
                    <Col className="text-center">
                    <h2>Rate this schedule!</h2> 
                  
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
                              {"Year: " + yearLevel[Math.floor(Math.random()*yearLevel.length)]}
                          </Badge>{' '}
                          <Badge pill bg="secondary" style = {{margin: "5px"}}>
                              {"Major: " + majors[Math.floor(Math.random()*majors.length)]}
                          </Badge>{' '}
                          <Badge pill bg="secondary" style = {{margin: "5px"}}>
                            {"GPA: " + ((Math.floor(Math.random() * 400)) / 100)}
                          </Badge>{' '}
                          </h5>
                        </Row>
                        <Row>
                        <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Academic Difficulty: <Rating name={"read-only"} value={(courseDiff + workDiff + profDiff) / 3} precision= {0.1} readOnly style={{marginLeft: "5px"}} /> </Accordion.Header>
                                <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>Course Difficulty: <Rating
                                                                              name="simple-controlled"
                                                                              value={courseDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setCourseDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                    <ListGroup.Item>Workload: <Rating
                                                                              name="simple-controlled"
                                                                              value={workDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setWorkDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                    <ListGroup.Item>Professor Difficulty:<Rating
                                                                              name="simple-controlled"
                                                                              value={profDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setProfDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accessibility Difficulty: <Rating name={"read-only"} value={(commuteDiff + mornDiff + lunchDiff) / 3} precision= {0.1} readOnly style={{marginLeft: "5px"}}/> </Accordion.Header>
                                <Accordion.Body>
                                <ListGroup>
                                    <ListGroup.Item>Commute Times: <Rating
                                                                              name="simple-controlled"
                                                                              value={commuteDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setCommuteDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                    <ListGroup.Item>Morning/Evening Classes: <Rating
                                                                              name="simple-controlled"
                                                                              value={mornDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setMornDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                    <ListGroup.Item>Lunch Breaks: <Rating
                                                                              name="simple-controlled"
                                                                              value={lunchDiff}
                                                                              onChange={(event, newDiff) => {
                                                                                setLunchDiff(newDiff);
                                                                              }}
                                                                            /></ListGroup.Item>
                                </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion>
                        </Row>
                        <Row>
                          <Form style={{padding:"10px 30px"}}>
                            <Form.Group className="mb-3" controlId="rateForm.commentArea">
                              <Form.Label>Leave a comment!</Form.Label>
                              <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                            <div className="d-flex align-items-center justify-content-center">
                            <Button variant="primary" onClick={handleClick} type="submit">
                              Rate!
                            </Button>
                            </div>
                          </Form>
                        </Row>
                        <Row className = "text-center">
                            <p><small>Higher ratings are worse.</small></p>
                        </Row>
                    </Col>
                </Row>
            </Container>
      <BottomNav/>
    </div>
  );
}