import React from 'react';
import { Button } from 'react-bootstrap';
import './home.css';


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="tinted-image">
                <section className="hero is-md">
                <div className="hero-body">

                    <h2 className="home-center">
                        my name is
                    </h2>
                    

                    <h1 className="home-content-center">cydney pollard.</h1>
                    <h1 className="home-content-center">A Developer and Designer.</h1>

                    <h2 className="home-center">
                    i'm a software engineer with a background in graphic design, currently residing in Orlando, Florida.<br></br>
                    </h2>


                    <div className="homepage-button">
                    <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034">Github</Button> &nbsp;
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