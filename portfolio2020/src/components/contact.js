import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return(
            <div className = "contact-body">
                <Grid className = "contact-grid">
                    <Cell col={6}>
                        <h2>Jaycee Bagtas</h2>
                        <img 
                        src="https://lokisixonenine.com/assets/images/jaycee.jpg"
                        alt="jaycee"
                        style={{height: '200px', borderRadius: '50%'}}
                        />
                        < p style = {
                            {
                                width: '75%',
                                margin: 'auto',
                                paddingTop: '1em'
                            }
                        }>I look forward to helping you achieve your creative goals! I am available for all kinds of development work. Email or call and give me a day or two to get back to you. If you call, please leave a message as I get a lot of robocallers.</p>
                    </Cell>
                    <Cell col={6}>
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