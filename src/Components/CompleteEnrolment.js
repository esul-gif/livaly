import ProgressBar from 'react-bootstrap/ProgressBar';
import Iframe from 'react-iframe';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './Enroll.css'

function CompleteEnrolment(props) {

	const[checked,setChecked] = useState(JSON.parse(window.localStorage.getItem('checked')))
	const[checked2,setChecked2] = useState(JSON.parse(window.localStorage.getItem('checked2')))
	const[progress,setProgress] = useState(JSON.parse(window.localStorage.getItem('progress')))

	useEffect(()=> {
		window.localStorage.setItem('progress', (progress))
	})

	useEffect(()=> {
		window.localStorage.setItem('checked', (checked))
	})

	useEffect(()=> {
		window.localStorage.setItem('checked2', (checked2))
	})
	
	function check() {
		setProgress(progress + 50);
		setChecked(true);
	};

	function check2() {
		setProgress(progress + 50);
		setChecked2(true);
	};
	
	const stepbox = {
	textAlign: 'center', 
	background: 'white',
	border: '2px solid',
	boxShadow: '0px 0px 5px',
};

	const frame = {
	border: '5px solid grey',
	width:"80%",
	margin: 'auto',
	borderRadius: '25px'
};

	const innerFrame = {
		width:"100%", 
		height:"500px", 
		borderRadius:'20px',
		marginBottom: '-6px',
	}

	const outlook = 'https://outlook.com'
	const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2863.232528295218!2d12.242089415649941!3d44.14045002880405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ca4cf4cf57c7f%3A0x99a6da8cbf2c81da!2sVia%20Montalti%2C%2079%2C%2047521%20Cesena%20FC%2C%20Italy!5e0!3m2!1sen!2sus!4v1674078434291!5m2!1sen!2sus/';
	
	return(
	<div className='body'>
		<Container style={{padding: '25px'}}>
			<h1 style={{textAlign:'center', fontWeight:'800'}}> {props.title} </h1>
			<ProgressBar animated now={progress} />
			<div style={{textAlign:'center', fontWeight:'600', width: '20%', margin: 'auto'}}>
				<h5>Status: {progress}%</h5>
			</div>
		</Container>

		<Container fluid="md">
			<Row>
				<Col xl={6}>
					<div style={stepbox}>
						<div style={{padding: '15px'}}>
							<h3 style={{fontWeight:'700'}}>Email segcesena@unibo.it</h3>
							<div style={frame}>
								<Iframe url={outlook} styles={innerFrame} allowfullscreen="true" loading="lazy"></Iframe>
							</div>
							<button className='btn' onClick={check} disabled={checked}> Email Sent </button>
						</div>
					</div>
				</Col>

				<Col xl={6}>
					<div style={stepbox}>
						<div style={{padding: '15px'}}>
							<h3 style={{fontWeight:'700'}}>Arrive at Secretary Office</h3>
							<div style={frame}>
								<Iframe url={map} styles={innerFrame} allowfullscreen="true" loading="lazy"></Iframe>
							</div>
							<button className='btn' onClick={check2} disabled={checked2}> Arrived </button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
	);
};

export default CompleteEnrolment;
		

