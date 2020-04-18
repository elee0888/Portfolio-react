import React from 'react'
import pdf from '../images/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'




export const Contact=() =>(
    <div>
        <h2>Contact Info: </h2>
        <p><a href="https://github.com/elee0888">GitHub</a></p>
        <p><a href="https://www.linkedin.com/in/eric-lee-156300b1/">LinkedIn</a></p>
        <p><a href= {pdf}>Resume</a></p>
        <p><h3>Email: eric.glee092@gmail.com</h3></p>
        
    </div>
)

export default Contact;