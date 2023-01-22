import { Button } from "react-bootstrap";


function Homepage() {

    function clear() {
        window.localStorage.setItem('progress','0')
        window.localStorage.setItem('codiceProgress','0')
        window.localStorage.setItem('healthProgress','0')
        window.localStorage.setItem('checked','false')
        window.localStorage.setItem('checked2','false')
        window.localStorage.setItem('codiceChecked','false')
        window.localStorage.setItem('codiceChecked2','false')
        window.localStorage.setItem('codiceChecked3','false')
        window.localStorage.setItem('healthChecked','false')
        window.localStorage.setItem('healthChecked2','false')
        window.localStorage.setItem('healthChecked3','false')
    }

    return (
        <div>
            <Button onClick={clear}> Reset </Button>
        </div>
            
    )
}

export default Homepage