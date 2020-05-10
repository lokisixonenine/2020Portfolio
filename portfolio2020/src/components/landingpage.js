import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src = "https://lokisixonenine.com/assets/images/jaycee.jpg" alt="jaycee" className ="avatar-img"/>
                        <div className = "banner-text"><h1>Full Stack Developer</h1>

                        <hr/>

                        <p>HTML/CSS | JavaScript | BootStrap | NodeJS | MySQL | MongoDB | React | Graphic Design | Photographer</p>
                        <div className="social-links">

                        {/* LinkedIn */}
                        <a href = "http://linkedin.com/in/loki619" rel="noopener noreferrer" target="_blank">
                            <i className ="fa fa-linkedin" aria-hidden="true"/>
                        </a>
                        {/* GitHub */}
                        <a href = "https://github.com/lokisixonenine" rel="noopener noreferrer" target="_blank">
                            <i className ="fa fa-github" aria-hidden="true"/>
                        </a>
                        {/* Twitter */}
                        <a href = "https://twitter.com/lokisixonenine" rel="noopener noreferrer" target="_blank">
                            <i className ="fa fa-twitter" aria-hidden="true"/>
                        </a>
                        {/* Instagram */}
                        <a href = "https://instagram.com/lokisixonenine" rel="noopener noreferrer" target="_blank">
                            <i className ="fa fa-instagram" aria-hidden="true"/>
                        </a>
                        </div>
                        </div>
                        
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Landing;