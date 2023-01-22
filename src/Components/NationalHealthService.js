import ProgressBar from 'react-bootstrap/ProgressBar';
import Iframe from 'react-iframe';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import './Enroll.css'
import  OverlayTrigger  from 'react-bootstrap/Overlay'
import Popover  from 'react-bootstrap/Popover'
import Form from 'react-bootstrap/Form'

function NationalHealthService(props) {

		const[checked,setChecked] = useState(JSON.parse(window.localStorage.getItem('healthChecked')))
		const[checked2,setChecked2] = useState(JSON.parse(window.localStorage.getItem('healthChecked2')))
		const[checked3,setChecked3] = useState(JSON.parse(window.localStorage.getItem('healthChecked3')))
		const[progress,setProgress] = useState(JSON.parse(window.localStorage.getItem('healthProgress')))
	
	
		useEffect(()=> {
			window.localStorage.setItem('healthProgress', (progress))
		})
	
		useEffect(()=> {
			window.localStorage.setItem('healthChecked', (checked));
			window.localStorage.setItem('healthChecked2', (checked2));
			window.localStorage.setItem('healthChecked3', (checked3))
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

	
		const iframe1 = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2859.1277685576138!2d12.050777799999999!3d44.22502779999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x807fda50dba2ed89!2zNDTCsDEzJzMwLjEiTiAxMsKwMDMnMDIuOCJF!5e0!3m2!1sen!2sus!4v1674253579347!5m2!1sen!2sus'
		const iframe2 = 'https://www.agenziaentrate.gov.it/portale/documents/20143/278893/modello+cf+AA48_modello+AA4+8.pdf/a8287f7f-abcf-c4f9-b4f7-f038486bc7d6'
		const iframe3 = 'https://outlook.com'
	return(
	<div>
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
									<div style={innerFrame}>
											<Form>
												{['checkbox'].map((type) => (
													<div key={`default-${type}`} className="mb-3">
														<Form.Check 
															type={type}
															label='Ask how to pay for voluntary registration for students'
														/>
														<Form.Check 
															type={type}
															label='Fill out documents/payment instructions provided by the operator'
														/>
														<Form.Check 
															type={type}
															label='Request payment slip for 2023 and 2024'
														/>
														<Form.Check 
															type={type}
															label='Pay (¢149,77 x 2) for two years of SNN registration, and keep the payment receipts'
														/>
													</div>
													
												))}
											</Form>
									</div>
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
		<h1> 3. Register for National Health Service </h1>
		<ol>
			<li> <a href="https://www.google.com/maps/place/44%C2%B013'30.1%22N+12%C2%B003'02.8%22E/@44.2250267,12.048591,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x512e202d9b373b4c!8m2!3d44.2250267!4d12.0507797" target="_blank"> Go to "Sportello Unico" AUSL(CUP) </a> </li> 
			<li> Ask how to pay for voluntary registration for students </li>
			<li> Fill out documents/payment instructions provided by the operator </li>
			<li> Request payment slip for 2023 and 2024 </li>
			<li> Pay (¢149,77 x 2) for two years of SNN registration, and keep the payment receipts </li>
			<li> Make copy of payment receipts and attach them to Residence Permit Application </li>
		</ol>
		<table>
			<tr>
			<th> Give (-) </th>
			<th> Gain (+) </th>
			</tr>
			<tr>
			<td> Codice Fiscale, Passport, ¢299.45 </td>
			<td> SSN Payment Receipts  </td>
			</tr>
		</table>	
		<p> *Remember: This is enough for the residence permit application, but there is still another step to registering for National Health Service (SSN). After applying for the residence permit, go back to the "Sportello Unico" AUSL(CUP) ASAP with 1. Passport 2. Codice Fiscale 3. Payment Receipts 4. Postal receipt of residence permit 5. Enrollment certificate from UNIBO 6. Registration form for non-EU citizens (try to find one for Forlì, only seeing Bologna locale on the website. You will then choose a family doctor. The Tessera Sanitaria will be sent to the address put for Codice Fiscale application. </p>
		<h3> If you can go in Cesena: </h3>
		<p> In Cesena there are two centers you can refer to for the subscription to the National Healthcare System: The first one is in Corso Cavour, 180 (close to the train station) opens 7AM-7PM Monday-Fridays and 7AM-12PM Saturday; the other one is in Via Leopoldo Lucchi, inside Centro Montefiore shopping mall and it’s open 8.30AM-7.00PM Monday-Friday and 8.30AM-12.00PM Saturday)</p>
	</div>
	)
}

export default NationalHealthService