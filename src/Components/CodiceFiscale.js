import ProgressBar from 'react-bootstrap/ProgressBar';
import Iframe from 'react-iframe';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './Enroll.css'
import  OverlayTrigger  from 'react-bootstrap/Overlay'
import Popover  from 'react-bootstrap/Popover'

function CodiceFiscale(props) {
	const[checked,setChecked] = useState(JSON.parse(window.localStorage.getItem('codiceChecked')))
	const[checked2,setChecked2] = useState(JSON.parse(window.localStorage.getItem('codiceChecked2')))
	const[checked3,setChecked3] = useState(JSON.parse(window.localStorage.getItem('codiceChecked3')))
	const[progress,setProgress] = useState(JSON.parse(window.localStorage.getItem('codiceProgress')))


	useEffect(()=> {
		window.localStorage.setItem('codiceProgress', (progress))
	})

	useEffect(()=> {
		window.localStorage.setItem('codiceChecked', (checked));
		window.localStorage.setItem('codiceChecked2', (checked2));
		window.localStorage.setItem('codiceChecked3', (checked3))
	})
	
	function check() {
		setProgress(progress + 33);
		setChecked(true);
	};

	function check2() {
		setProgress(progress + 33);
		setChecked2(true);
	};

	function check3() {
		setProgress(progress + 34);
		setChecked3(true);
	}
	
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

	const iframe1 = 'https://prenotazioneweb.agenziaentrate.gov.it/PrenotazioneWeb/prenotazione.action'
	const iframe2 = 'https://www.agenziaentrate.gov.it/portale/documents/20143/278893/modello+cf+AA48_modello+AA4+8.pdf/a8287f7f-abcf-c4f9-b4f7-f038486bc7d6'
	const iframe3 = 'https://outlook.com'
	/*const popover = (
		<Popover id="popover-basic">
			<Popover.Header as="h3">How to Make Appointment</Popover.Header>
			<Popover.Body>
				Use the page below to make an appointment.
			</Popover.Body>
		</Popover>
	);*/

	return (
	<div>
	
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
							<h3 style={{fontWeight:'700'}}>{props.step1}</h3>				
							<div style={frame}>
								<Iframe url={iframe1} styles={innerFrame} allowfullscreen="true" loading="lazy"></Iframe>
							</div>
							<button className='btn' onClick={check} disabled={checked}> Complete </button>
						</div>
					</div>
				</Col>

				<Col xl={6}>
					<div style={stepbox}>
						<div style={{padding: '15px'}}>
							<h3 style={{fontWeight:'700'}}>{props.step2}</h3>
							<div style={frame}>
								<Iframe url={iframe2} styles={innerFrame} allowfullscreen="true" loading="lazy"></Iframe>
							</div>
							<button className='btn' onClick={check2} disabled={checked2}> Complete </button>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
			<Col xl={6}>
					<div style={stepbox}>
						<div style={{padding: '15px'}}>
							<h3 style={{fontWeight:'700'}}>{props.step3}</h3>				
							<div style={frame}>
								<Iframe url={iframe3} styles={innerFrame} allowfullscreen="true" loading="lazy"></Iframe>
							</div>
							<button className='btn' onClick={check3} disabled={checked3}> Complete </button>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	</div>
	<ol>
		<li> <a href="https://prenotazioneweb.agenziaentrate.gov.it/PrenotazioneWeb/prenotazione.action" target="_blank"> Book Appointment at Agenzia delle Entrate </a> </li>

		<li> <a href="https://www.agenziaentrate.gov.it/portale/documents/20143/278893/modello+cf+AA48_modello+AA4+8.pdf/a8287f7f-abcf-c4f9-b4f7-f038486bc7d6" target="_blank"> Completed Application </a> </li>

		<li> Use Codice Fiscale to obtain rental contract from tenant. This will be needed for Residence Permit Application </li>
	</ol>

     <a href="file:///Users/ericsultini/Downloads/Prenotazione%20appuntamenti%20-%20Conferma%20prenotazione%20(2).pdf"> Here </a>

	<table>
		<tr>
		<th> Give (-) </th>
		<th> Gain (+) </th>
		</tr>
		<tr>
		<td> Application, Passport (with visa), </td>
		<td> Codice Fiscale </td>
		</tr>
	</table>



	<h4> Extra details on obtaining Codice Fiscale </h4>
	<p> Italian Tax code (Codice Fiscale): if you don’t have one, you can make it for free at the entry Agency here. In Cesena the office is in Via Riccardo Brusi, 231, 47521 Cesena FC (not distant from the Campus) and it’s open from 8.45AM to 12.45PM, Monday to Friday. If I remember correctly at the entrance there is a ticket machine from which you can select “Codice Fiscale” and be sent straight to a specialized counter. You’ll need an ID document (passport is fine) and the operators will ask you for an address to send the card to. On the spot you’ll be given a provisional tax code you can use while waiting for the card to arrive; </p>

	<h5> If you don't have a permanent address </h5>

	<p> As soon as you have a permanent address in Italy, or if you change address / residence in the future, you can book an appointment and go back to the “Agenzia delle Entrate” (Revenue Agency) to update your data, by handing in the documents relating to your accommodation. If in the meantime you have registered with the “Servizio Sanitario Nazionale” (Italian National Health Service), you can ask for the “Tessera Sanitaria” (European Health Insurance Card) to be printed and sent to the address provided. </p>

	</div>
	)
}

export default CodiceFiscale