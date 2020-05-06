import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                        <Cell col={3}>
                            <div style={{textAlign: 'center'}}>
                            <h2 style={{fontFamily: 'Pacifico'}}>Jaycee Bagtas</h2>                                
                            <img src="https://lokisixonenine.com/assets/images/jaycee.jpg" alt="jaycee" style={{height: '200px', borderRadius: '50%'}}/>
                            </div>
                        </Cell>
                        <Cell className="resume-right-col" col={9}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;