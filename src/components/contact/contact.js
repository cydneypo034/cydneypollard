import React from 'react';
import {Button} from 'react-bootstrap';
import './contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div>
            <div className="text-center">
                Contact Me!
            </div>

            <div className="container">
            <div className="techs">
                <p className="skills-center">Email</p>
                <p className="skills-langs">I can be contacted via Email at: <br/> 
                <Button variant="outline-warning" className="button-text" href="mailto: cydneypollarddesigns@gmail.com">cydneypollarddesigns@gmail.com</Button>
                </p>
            </div>
            
            <div className="techs">
                <p className="skills-center">LinkedIn</p>
                <p className="skills-langs">I can also be contacted via LinkedIn: <br/>
                <Button variant="outline-warning" className="button-text" href="https://www.linkedin.com/in/cydney-pollard-47aa6212a/"> Cydney Pollard's LinkedIn</Button>
                </p>
            </div>

            <div className="techs">
                <p className="skills-center">GitHub</p>
                <p className="skills-langs">You can view my coding process via Github: <br/>
                <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034">cydneypo034's github</Button>
                </p>
            </div>
            

            </div>

            
            </div>
        )
    }
}

export default Contact;