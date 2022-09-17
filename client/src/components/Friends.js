import React, {useState} from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Profile from './Profile';


export default function Friends () {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  // For showing list.

  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)


  const Results = () => (
    <tr>
          <td>Winston Zha</td>
          <td>Junior</td>
          <td>Business/CS</td>
          <td>winstonzha</td>
          <td><Button variant="primary"> View Schedule </Button></td>
          <td><Button variant="secondary" onClick={handleShow3}>Profile</Button></td>
    </tr>
  )

  return (

    <div>
      <Header/>
      <h1 className = "text-center">My Friends</h1>
      <Container fluid = "sm">

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Search</Form.Label>
        <Form.Control type="search" placeholder="Enter username" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Button onClick={onClick}>Search</Button>
      </Container>
      <Container fluid = "sm">
        <Table className = "table table-hover" style={{verticalAlign: "middle"}}>
        <thead>
          <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Major</th>
          <th>Username</th>
          <th>View Schedule</th>
          <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Shawn Lee</td>
          <td>Freshman</td>
          <td>CS Undeclared</td>
          <td>shawneeboy</td>
          <td><Button variant="primary"> View Schedule </Button></td>
          <td><Button variant="secondary" onClick={handleShow}>Profile</Button></td>
          </tr>
          <tr>
          <td>Teo Sohn</td>
          <td>Junior</td>
          <td>Physics/CS</td>
          <td>tsohn</td>
          <td><Button variant="primary"> View Schedule </Button></td>
          <td><Button variant="secondary" onClick={handleShow1}>Profile</Button></td>
          </tr>
          <tr>
          <td>Andrew Youn</td>
          <td>Junior</td>
          <td>MechE/CS</td>
          <td>theightine</td>
          <td><Button variant="primary"> View Schedule </Button></td>
          <td><Button variant="secondary" onClick={handleShow2}>Profile</Button></td>
          </tr>

          {showResults ? <Results/> : null}

          

          
        </tbody>
        </Table>
      <BottomNav/>
    </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body><Profile name="Shawn Lee" year="Freshman" major="SCS Undeclared" numSchedules="12" numCredits="23" rating="4.9"/></Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Body><Profile name="Teo Sohn" year="Junior" major="Physics/CS" numSchedules="31" numCredits="44" rating="3.8"/></Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Body><Profile name="Andrew Youn" year="Junior" major="MechE/CS" numSchedules="9" numCredits="67" rating="2.5"/></Modal.Body>
      </Modal>
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Body><Profile name="Winston Zha" year="Junior" major="Business/CS" numSchedules="13" numCredits="27" rating="3.5"/></Modal.Body>
      </Modal>
    </div>
  );
}