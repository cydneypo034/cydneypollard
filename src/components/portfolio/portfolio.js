import React from 'react';
import artist from '../images/Screenshot101.png';
import fiaworld from '../images/fiaworld.png';
import pony from '../images/pony.png';
import feminaku from '../images/feminakufrontpage.png';
import github from '../images/githublogo.png';
import heroku from '../images/heroku.png';
import netlify from '../images/logomark.png';
import crownclothing from '../images/crownproject.png';

import './portfolio.css';

class Portfolio extends React.Component {
    render() {
        return (
            <div >
            <h1 className="text-center">my portfolio</h1>
            <h2 className="para-center">Web development has given me the opportunity to take a small vision and transform it into
            an expanded story. Viewers can learn about what makes a brand who they are through where they got started, what they offer,
            and where they can be contacted. Below are a few examples of my web applications that I completed while attending my
            coding bootcamp, General Assembly in Atlanta. </h2>
            
            <section>            
            <div className="card-wrapper">


            <div className="card">
                    <img src={crownclothing} alt="clothing ecommerce store" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">CRWN Clothing Ltd. is a e-commerce fashion website. 
                    Made with React, React Router DOM, React Redux, Stripe API, Firebase, and Reselect
                        <br />
                        <br />
                        <a href="https://github.com/cydneypo034/crown-clothing"><img src={github} 
                        alt="github" className="logo-image" height="100px" width="100px"/></a>
                        <a href="https://crownclothes.herokuapp.com/"><img src={heroku}
                        alt="netlify" className="logo-image" height="100px" width="100px" /></a>
                         </p>
                    
                    </div>
                </div>

                <div className="card">
                    <img src={feminaku} alt="feminkau" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Feminaku is an upcoming social networking 
                    application for women who love all things anime. 
                        <br />
                        <br />
                        <a href="https://github.com/cydneypo034/feminakutwo"><img src={github} 
                        alt="github" className="logo-image" height="100px" width="100px"/></a>
                        <a href="https://feminaku.herokuapp.com/"><img src={heroku}
                        alt="heroku" className="logo-image" height="100px" width="100px"/></a>
                         </p>
                    
                    </div>
                </div>


                <div className="card">
                    <img src={artist} alt="Artist" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">An Artist's Pocket is an upcoming art 
                    store directory application that promotes local art stores 
                    in the state of Georgia.
                        <br />
                        <br />
                        <a href="https://github.com/cydneypo034/artist-app"><img src={github} 
                        alt="github" className="logo-image" height="100px" width="100px"/></a>
                        <a href="https://vast-dusk-81442.herokuapp.com/artstore"><img src={heroku}
                        alt="heroku" className="logo-image" height="100px" width="100px"/></a>
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
                        <br />
                        <a href="https://github.com/cydneypo034/fiaworld-project"><img src={github}
                        alt="github" className="logo-image" height="100px" width="100px"/></a>
                         <a href="https://fierce-mountain-28176.herokuapp.com"><img src={heroku}
                         alt="heroku" className="logo-image" height="100px" width="100px"/></a>
                         </p>
                    
                    </div>
                </div>

                <div className="card">
                    <img src={pony} alt="my little pony game" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">My Best Friend Says is a rendition of the classic game of Simon Says
                    using a theme of the children's television show My Little Pony: Friendship is Magic.
                        <br />
                        <br />
                        <a href="https://github.com/cydneypo034/mybestfriendsays"><img src={github} 
                        alt="github" className="logo-image" height="100px" width="100px"/></a>
                        <a href="https://adoring-bhaskara-ff6b52.netlify.com/"><img src={netlify}
                        alt="netlify" className="logo-image" height="100px" width="100px" /></a>
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
