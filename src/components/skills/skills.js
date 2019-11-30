import React from 'react';

class Skills extends React.Component {
    render() {
        return(
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
                    <p className="skills-center">Frameworks & Libraries: </p>
                        <p className="skills-langs">React.js, Bulma, Bootstrap, 
                        Material Design Bootstrap, <br/> Mongoose, Node.js, Express.js, Django Rest Framework</p>
                    </div>

            <div className="techs">
                    <p className="skills-center">Tools and Platforms: </p>
                        <p className="skills-langs">Git Version Control,
                        Visual Studio Code, Github, Heroku, Netlify, Figma, Trello</p>
                    </div>

                    <div className="techs">
                    <p className="skills-center">Graphic Design Tools: </p>
                        <p className="skills-langs">Adobe Illustator, Photoshop, InDesign</p>
                    </div>
            </div>
            </div>
        )
    }
}

export default Skills;