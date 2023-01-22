
import Container from 'react-bootstrap/Container';
import {Routes, Route, Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import CodiceFiscale from './Components/CodiceFiscale'
import CompleteEnrolment from './Components/CompleteEnrolment'
import NationalHealthService from './Components/NationalHealthService'
import Questura from './Components/Questura'
import SportelloAmico from './Components/SportelloAmico';
import TheNavBar from './Components/TheNavBar';
import Homepage from './Components/Homepage';


function App() {
  return (
    <div className="App">
      <TheNavBar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path="/Complete-Enrolment" element={<CompleteEnrolment
                 title="Complete Enrollment"
                 step1="Email segcesena@unibo.it"
                 step2='Arrive at Secretary Office'
          />} />
          <Route path="/Codice-Fiscale" element={<CodiceFiscale
                 title="Obtain Codice Fiscale" 
                 step1='Agenzia delle Entrate'
                 step2='Complete Application'
                 step3='Use Codice Fiscale to obtain rental contract'
          />} />
          <Route path="/Health" element={<NationalHealthService 
                title="Register for National Health Service"
                step1='Find Sportello Unico'
                step2="Follow these steps at AUSL(CUP)"
                step3="Make copy of payment receipts and attache them to Residence Permit Application"
                
          />} />
          <Route path="Post-Office" element={<SportelloAmico />} />
          <Route path="/Questura" element={<Questura />} />
        </Routes>
    </div>
  );
}

export default App;
