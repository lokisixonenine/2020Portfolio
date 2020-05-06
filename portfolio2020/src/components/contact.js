import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col={4}>
                        <h2>Jaycee Bagtas</h2>
                        <img 
                        src="https://lokisixonenine.com/assets/images/jayceeArnisAvatar.png"
                        alt="jaycee"
                        style={{height: '200px', borderRadius: '50%'}}
                        />
                        <h3 className = "contact-line">Web Developer</h3>
                        < p style = {
                            {
                                width: '75%',
                                margin: 'auto',
                                paddingTop: '1em'
                            }}>Since things aren't always #000000 and #ffffff, let me be the CSS to your HTML - Let's work together and give your customers the best instance of you!
                        I am only a phone call, text message, or email away!</p>
                    </Cell>
                    <Cell col={8}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                            <i className="fa fa-phone-square" aria-hidden="true"/>(619) 717.6012
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize: '25px', fontFamily: 'Open Sans'}}>
                            <i className="fa fa-envelope" aria-hidden="true"/>jaycee.bagtas@gmail.com
                            </ListItemContent>
                        </ListItem>
                        </List>
                      </div>  
                    </Cell>    
                </Grid>
            </div>
        )
    }
}

export default Contact;