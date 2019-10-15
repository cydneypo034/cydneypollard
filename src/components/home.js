import React from 'react';
import { Button } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="tinted-image">
                <section className="hero is-md">
                <div className="hero-body">

                    <h2 className="para-center">
                        my name is
                    </h2>
                    

                    <h1 className="text-center2">cydney pollard</h1>
                    <h1 className="text-center2">I develop and design <br /> aiming for an impact.</h1>

                    <h2 className="para-center">
                    I'm a software engineer with a background in graphic design, currently residing in Orlando, Florida.<br></br>
                     If you would like to work with me, shoot me an email and let's talk!
                    </h2>


                    <div className="homepage-button">
                    <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034">Github</Button>
                    <Button variant="outline-warning" className="button-text" href="https://www.linkedin.com/in/cydney-pollard-47aa6212a/" >LinkedIn</Button>
                    </div>
                </div>
                </section>
                </div>


            
            </div>
        )
    }
}

export default Home;