import React from 'react';
import { Button } from 'react-bootstrap';
import artist from './images/Screenshot101.png';
import fiaworld from './images/fiaworld.png';
import pony from './images/pony.png';
import feminaku from './images/feminakufrontpage.png';

class Portfolio extends React.Component {
    render() {
        return (
            <div >
            <h1 className="text-center">my portfolio</h1>
            
            <section>            
            <div className="card-wrapper">

                <div className="card">
                    <img src={artist} alt="Artist" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">An Artist's Pocket is an upcoming art 
                    store directory application that promotes local art stores 
                    in the state of Georgia.
                        <br />
                        <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034/artist-app">An Artist's Pocket's Github</Button>
                         </p>
                    
                    </div>
                </div>


                <div className="card">
                    <img src={fiaworld} alt="fiaworld" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">FIA Corporation wanted an application 
                    that would be an update for their current website and showcased 
                    their extensive history of work over the years.
                        <br />
                        <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034/fiaworld-project">FIA Corportation's Github</Button>
                         </p>
                    
                    </div>
                </div>

                <div className="card">
                    <img src={pony} alt="my little pony game" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">My Best Friend Says is a rendition of the classic game of Simon Says
                    using a theme of the children's television show My Little Pony: Friendship is Magic.
                        <br />
                        <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034/mybestfriendsays">My Best Friend Says' Github</Button>
                         </p>
                    
                    </div>
                </div>

                <div className="card">
                    <img src={feminaku} alt="feminkau" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Feminaku is an upcoming social networking application for women who love all things anime. 
                        <br />
                        <Button variant="outline-warning" className="button-text" href="https://github.com/cydneypo034/feminakutwo">Feminaku's Github</Button>
                         </p>
                    
                    </div>
                </div>
                </div>

            </section>
           
            </div>
        )
    }
}

export default Portfolio;

/*
<div className="card-image">
            
            <div className="box">
            <div className="card-image2">
                <figure className="image is-2by2">
                <img src={marys} alt="Mary's Treats game"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="para-center">
                Mary's Treats is inspired by the original Hangman game. There are hints given at the bottom for the user to guess easily 
                        which flavor of ice cream is being displayed. If they get more than 6 letters wrong, they lose the game.
                </div>
                <a href="https://github.com/cydneypo034/mary-streats" className="button is-primary">Mary's Treats' Github</a>
            </div>
            </div>
            

 

            <div className="box">
            <div className="card-image3">
                <figure className="image is-2by2">
                <img src={feminaku} alt="feminaku social network" />
                </figure>
            </div>
            <div className="card-content">
            <div className="para-center">
                Feminaku is an upcoming social networking application for women who love all things anime. 
                        Feminaku has a target audience of women because of the sarcity of social networking sites geared towards 
                        female anime lovers is low.  
            </div>
            <a  href="https://github.com/cydneypo034/feminaku" className="button is-primary" >Feminaku's Github</a>
            </div>
            </div>

            </div>
*/
