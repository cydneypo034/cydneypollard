import React from 'react';
import akina from '../images/akinaimage.png';
import aesthetic from '../images/aesthetically.jpg';
import adobeport from '../images/adobeportfolio.png';
import graceful from '../images/graceful.jpg';
import catchfox from '../images/catch.png';
import './graphicarts.css';

class GraphicDesign extends React.Component {
    render(){
        return(
            <div>
                 <h1 className="text-center">my graphic design work</h1>
                 <h2 className="para-center">As an identity designer, I take pride in telling a brand's story because 
                 an identity gives a business "visual form". To view more examples like this, please feel free to visit
                <a href="https://cydneypollarddesigns.myportfolio.com/work"> my graphic design portfolio</a> here. </h2>
                <section>            
                <div className="card-wrapper">

                <div className="card">
                    <img src={akina} alt="mermaid on the moon" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Aktina's Closet is an identity design curated for the 
                    Daily Logo Challenge. The challenge was to create a logo for a clothing business.
                    <br />
                    <br />
                    <a href="https://cydneypollarddesigns.myportfolio.com/aktinas-closet"><img src={adobeport}
                    alt="portfolio" className="logo-image" height="100px" width="100px"/></a>
                    </p>
                    
                    </div>
                    
                </div>

                <div className="card">
                    <img src={aesthetic} alt="aesthetically" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Aesthetically Righteous was a branding agency that specialized in
                    creating flyers for Church Without Walls, The HOPE Center.
                    <br />
                    <br />
                    <a href="https://cydneypollarddesigns.myportfolio.com/aesthetically-righteous"><img src={adobeport}
                    alt="portfolio" className="logo-image" height="100px" width="100px"/></a>
                    </p>
                    
                    </div>
                    
                </div>

                <div className="card">
                    <img src={graceful} alt="purple crown" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Graceful Crowns is a hair company located in Carrollton, Georgia that offers 
                    hair bundles, wig-making services and lash extension services. 
                    <br />
                    <br />
                    <a href="https://cydneypollarddesigns.myportfolio.com/catch-a-fox"><img src={adobeport}
                    alt="portfolio" className="logo-image" height="100px" width="100px"/></a>
                    </p>
                    
                    </div>
                    
                </div>

                <div className="card">
                    <img src={catchfox} alt="purple crown" className="image"/>
                    <div className="overlay">
                    
                    <p className="text">Catch a Fox is an identity design that was curated for the Daily Logo Challenge
                    and the prompt was to design a logo based on an animal.
                    <br />
                    <br />
                    <a href="https://cydneypollarddesigns.myportfolio.com/graceful-crowns"><img src={adobeport}
                    alt="portfolio" className="logo-image" height="100px" width="100px"/></a>
                    </p>
                    
                    </div>
                    
                </div>

               
                </div>
                </section>
                </div>
        )
    }
}

export default GraphicDesign;