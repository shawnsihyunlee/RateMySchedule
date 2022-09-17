import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import icon from '../assets/icon.svg';

export default function Header(){
	return(
	<>
		<Navbar bg="light">
			<Container>
				<Navbar.Brand href="/">
					<img
                        alt=""
                        src={icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"/>{' '}
						RateMySchedule
				</Navbar.Brand>
                <Navbar.Text>
                    <b>Credits : {localStorage.getItem("credits")}</b>
                </Navbar.Text>
			</Container>
		</Navbar>
	</>
	);
}