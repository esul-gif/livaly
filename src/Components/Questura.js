import Iframe from 'react-iframe'

function Questura() {
	return( 
	<div>
	<h1> 4. Appointment at the Questura </h1>
	<ol> 
		<li> Arrive on Appointment Date (props?) 
		<Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11436.6104852525!2d12.0339888!3d44.2245161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc6fe0c82b31999a5!2sPolice%20headquarters%20in%20Forli%20Cesena!5e0!3m2!1sen!2sus!4v1673553977495!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
		</li>
		<li> Hand over the following documents:
			<ul>
				<li> Passport </li>
				<li> 4 identical passport-size photographs with white background. </li>
				<li> ORIGINAL application receipt from Post Office (Sportello Amico) </li>
				<li> Document issued by Post Office (Sportello Amico) confirming appointment date </li>
			</ul>
		</li>
		<li> Once you receive your residence permit, send a copy to segcesena@unibo.it or segforli@unibo.it </li>
	</ol>
	<p> <em> Important! </em> If you receive a document with a Subject (Oggetto) containing the text “art.10 bis Legge nr. 241/90” during your appointment at the central police station (Questura), you need to submit other documents. If you need support, please contact the International Desk </p>
		<table>
			<tr>
			<th> Give (-) </th>
			<th> Gain (+) </th>
			</tr>
			<tr>
			<td> Passport, 4 pasport-size photos, application receipt, appointment confirmation document. </td>
			<td> Code allocated to file to track status. </td>
			</tr>
		</table> 
<h3> Tracking Status of Application </h3> 
	<p> Click <a href="https://questure.poliziadistato.it/stranieri/?mime=1&lang=IT" target="_blank"> Here </a> to track (maybe change this to an iFrame) </p>
	<p> To track the status of your application following your appointment at the Questura, you can enter the code allocated to the file during the appointment or the registered mail tracking number (the password written on the receipt given by the post office) on the State Police website. </p>
	</div>
	)
}

export default Questura
	

		
		