import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
//import bg from "../assets/bg.png";

export default function LandingPage(){
    return(
        <div style={{backgroundImage: `url("https://unbounce.com/photos/Gradient-Background.png")`,
                height: "100vh"}}>
            <Container fluid className="h-100 center-text d-flex flex-column align-items-center justify-content-center">
                <h1 className = "display-3">
                    Make schedules like never before.
                </h1>
                <form action="/schedule/open" method="post">
                    <Button variant="outline-dark" size="lg" style = {{marginTop: "30px", padding:"20px 40px"}} href="/schedule">Get Started</Button>{''}
                </form>
            </Container>
        </div>
    );
}