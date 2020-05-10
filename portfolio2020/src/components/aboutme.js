import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className = "contact-body">
                <Grid className = "aboutme-grid">
                    <Cell col={12}>
                        <h2>Jaycee Bagtas</h2>
                        <img 
                        src="https://lokisixonenine.com/assets/images/jaycee.jpg"
                        alt="jaycee"
                        style={{height: '150px', borderRadius: '50%'}}
                        />
                        <h3 className = "contact-line">Web Developer</h3>
                        < p style = {
                            {
                                width: '98%',
                                height: 'auto',
                                margin: 'auto',
                                paddingTop: '1em'
                            }
                            }>Prior to becoming a developer, I was a stunt double for Ken Jeong.Unfortunately, Ken Jeong hasn't starred in any action films that have required him to use a stunt double so my days as a stunt double ended before they began. As you can tell by my humor, I wasn't a very good stand up comedian either so I had to look for something else to do.</p>
                            <p style = { {
                                width: '98%',
                                height: 'auto',
                                margin: 'auto',
                                paddingTop: '1em',
                                paddingBottom: '1em'
                            }
                            }>On a more serious note, prior to becoming a Web Developer, I was the Director of Admissions, Financial Aid and Marketing for the San Diego Culinary Institute. I assisted students, many of whom were web developers, in transitioning to culinary careers. When the school closed in December 2019, I decided to follow the advice that I have been giving to students for years - follow your passion. For me, my passion has always been building things. Instead of with food, I now do it with code.</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default About;