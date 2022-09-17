import React from "react";
import BottomNav from "./BottomNav";
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Rating from '@mui/material/Rating'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import pfp from '../assets/pfp.svg';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Profile from "./Profile";

export default function MyProfilePage () {
  return (
    <>

    <Header />
    <Container fluid className="d-flex align-items-center justify-content-center">
        <Profile name="Bob" year="Junior" major="ECE" numSchedules="73" numCredits={localStorage.getItem("credits")} rating="4.3"/>
    </Container>
    <BottomNav />

    </>
  );
}