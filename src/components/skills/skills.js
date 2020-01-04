import React from 'react';

//front-end frameworks
//front-end libraries

const Skills = () => (
        <div>
            <div className="container">
            <h2 className="text-center">Skills</h2>
            
            <p className="para-center">Here are a few of the 
            technologies, libraries, languages and frameworks
             I've had the chance to worked with:</p>
        
           <div className="techs">
                <p className="skills-center">Languages: </p>
                    <p className="skills-langs">HTML, CSS, JavaScript (ES6),
                     Python, SQL</p>
            </div>

            <div className="techs">
                <p className="skills-center">Back-End Tools: </p>
                <p className="skills-langs">Mongoose, Node.js, Express.js, Django Rest Framework</p>
            </div>

            <div className="techs">
                <p className="skills-center">Front-End Frameworks: </p>
                    <p className="skills-langs">React.js, React Redux, React Router DOM, Reselect</p>
                </div>
            
            <div className="techs">
                <p className="skills-center">Front-End Libraries: </p>
                <p className="skills-langs">Bulma, Bootstrap, Material Design Bootstrap, Material UI </p>
            </div>

        <div className="techs">
                <p className="skills-center">Coding Tools and Platforms: </p>
                    <p className="skills-langs">Git Version Control,
                    Visual Studio Code, Github, Heroku, Netlify, Figma, Trello</p>
                </div>
        </div>
        </div>
) 

export default Skills;