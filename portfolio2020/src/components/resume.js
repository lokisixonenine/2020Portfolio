import React, { Component } from 'react';
import { Grid, Cell, } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                        <Cell col={3}>
                            <div style={{textAlign: 'center'}}>
                            <h2 style={{fontFamily: 'Pacifico'}}>Jaycee Bagtas</h2>                                
                            < img src = "https://lokisixonenine.com/assets/images/jaycee_1.jpg" alt = "jaycee" style = {
                                {
                                    width: '300px',
                                    borderRadius: '8%'
                                }
                            }
                            />
                            </div>
                        </Cell>
                        <Cell className="resume-right-col" col={9}>
                            <h2 style={{fontFamily:'Open Sans', textAlign: 'center'}}>My qualifications... at a Glance</h2>
                            <h3 className = "resume-line">Professional Summary</h3>
                            < p className = "resume-heading" > I am a post - secondary education administrator who has been doing freelance web designer on and off
                            for years.I am transitioning into software development fulltime and am currently enrolled in a Full Stack Boot Camp at the University of California, San Diego, Extenstion. My current expected completion date is June 2020. </p>

                            <h3 className = "resume-line">Education</h3>
                            <h4 className = "resume-heading-a">Full Stack Boot Camp</h4>
                            <p className="resume-heading">- University of California, San Diego Extension, December 2019 - June 2020</p>
                            <h3 className = "resume-line">Work History</h3>
                            <h4 className = "resume-heading-a">Full Stack Boot Camp Student</h4>
                            <p className="resume-heading">- University of California, San Diego Extension, December 2019 - June 2020</p>
                            <h4 className = "resume-heading-a">Director of Financial Aid and Admissions</h4>
                            <p className="resume-heading">- San Diego Culinary Institute, October 2010 - December 2019</p>
                            <h4 className = "resume-heading-a">Director of Admissions</h4>
                            <p className="resume-heading">- San Diego Culinary Institute, May 2006 - October 2010</p>
                            <h4 className = "resume-heading-a">Manager of Admissions and Marketing</h4>
                            <p className="resume-heading">- San Diego Culinary Institute, February 2003 - May 2006</p>
                            <a className ="resume-download" href="/src/components/img/jaycee_resume.pdf" download>Download my Full Resume</a>
                    </Cell>            
                </Grid>
            </div>
        )
    }
}

export default Resume;