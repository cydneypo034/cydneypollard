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
                <h2 className="para-center">Below are a few examples of my web applications that 
                I have completed starting from July of 2019 until now. </h2>

                <section>
                    <div className="card-wrapper">


                        <div className="card">
                            <img src={crownclothing} alt="clothing ecommerce store" className="image" />
                            <div className="overlay">

                                <p className="text">CRWN Clothing Ltd. is a e-commerce fashion website.
                                <br />
                                <p className="subtext">Made with React, React Router DOM, React Redux, Stripe API, Firebase, and Reselect</p>

                                    <a href="https://github.com/cydneypo034/crown-clothing"><img src={github}
                                        alt="github" className="logo-image" height="100px" width="100px" /></a>
                                    <a href="https://crownclothes.herokuapp.com/"><img src={heroku}
                                        alt="netlify" className="logo-image" height="100px" width="100px" /></a>
                                </p>
                            </div>
                        </div>

                        <div className="card">
                            <img src={feminaku} alt="feminkau" className="image" />
                            <div className="overlay">

                                <p className="text">Feminaku is an social gathering application.
                        <br />
                                    <br />
                                    <a href="https://github.com/cydneypo034/feminakutwo"><img src={github}
                                        alt="github" className="logo-image" height="100px" width="100px" /></a>
                                    <a href="https://feminaku.herokuapp.com/"><img src={heroku}
                                        alt="heroku" className="logo-image" height="100px" width="100px" /></a>
                                </p>
                                <p className="subtext">Made with React, React Router DOM, Express.Js, Node.Js, MDBootstrap, Mongoose and Mongo DB</p>

                            </div>
                        </div>


                        <div className="card">
                            <img src={artist} alt="Artist" className="image" />
                            <div className="overlay">

                                <p className="text">An Artist's Pocket is an art store directory application.
                        <br />
                                    <br />
                                    <a href="https://github.com/cydneypo034/artist-app"><img src={github}
                                        alt="github" className="logo-image" height="100px" width="100px" /></a>
                                    <a href="https://vast-dusk-81442.herokuapp.com/artstore"><img src={heroku}
                                        alt="heroku" className="logo-image" height="100px" width="100px" /></a>
                                </p>
                                <p className="subtext">Made with Express.Js, Node.Js, Handlebars.Js, Mongoose, Mongo DB and Bootstrap.</p>

                            </div>

                        </div>


                        <div className="card">
                            <img src={fiaworld} alt="fiaworld" className="image" />
                            <div className="overlay">

                                <p className="text">FIA Corporation is an multi-media production company.
                        <br />
                                    <br />
                                    <a href="https://github.com/cydneypo034/fiaworld-project"><img src={github}
                                        alt="github" className="logo-image" height="100px" width="100px" /></a>
                                    <a href="https://fierce-mountain-28176.herokuapp.com"><img src={heroku}
                                        alt="heroku" className="logo-image" height="100px" width="100px" /></a>
                                </p>
                                <p className="subtext">Made with React, React Router DOM, Node.Js, Python, SQL, Django Rest Framework and Express.Js</p>

                            </div>
                        </div>

                        <div className="card">
                            <img src={pony} alt="my little pony game" className="image" />
                            <div className="overlay">

                                <p className="text">My Best Friend Says is a rendition of the Simon Says game.
                        <br />
                                    <br />
                                    <a href="https://github.com/cydneypo034/mybestfriendsays"><img src={github}
                                        alt="github" className="logo-image" height="100px" width="100px" /></a>
                                    <a href="https://adoring-bhaskara-ff6b52.netlify.com/"><img src={netlify}
                                        alt="netlify" className="logo-image" height="100px" width="100px" /></a>
                                </p>
                                <p className="subtext">Made with HTML, CSS and Vanilla JavaScript.</p>
                            </div>
                        </div>






                    </div>

                </section>

            </div>
        )
    }
}

export default Portfolio;
