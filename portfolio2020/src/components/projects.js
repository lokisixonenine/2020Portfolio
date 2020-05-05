import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state={ activeTab: 0 };
    }

toggleCategories() {

    if(this.state.activeTab === 0) {
        return (
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'300px', background: 'url(https://lokisixonenine.com/assets/images/passwordGen.png) center / cover'}}>Password Generator</CardTitle> 
                <CardText>One of my first projects in Coding Boot Camp. Using vanilla JavaScript, we were assigned to create a password generator that users can go to and generate passwords of varying lengths using numbers, characters, and letters.</CardText>
                <CardActions border>
                    < Button colored > < a href = "https://github.com/lokisixonenine/PasswordGen" rel="noopener noreferrer" target="_blank" > Github </a></Button >
                    < Button colored > < a href = "https://lokisixonenine.github.io/PasswordGen/" rel="noopener noreferrer" target="_blank">Github Pages</a></Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        )
    } else if (this.state.activeTab === 1) {
        return (
             <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'300px', background: 'url(https://lokisixonenine.com/assets/images/clap.png) center / cover'}}>Bad Math with ClapTrap</CardTitle> 
                <CardText>This is another vanilla JavaScript project that borrows the popular character ClapTrap from the video game franchise, Borderlands. Play through it a few times and get the wrong answers to get some fun insults from this mouthy robot.</CardText>
                <CardActions border>
                    < Button colored > < a href = "https://github.com/lokisixonenine/Code_Quiz" rel="noopener noreferrer" target="_blank"> Github</a></Button>
                    < Button colored > < a href = "http://www.lokisixonenine.com/site_quiz.html" rel="noopener noreferrer" target="_blank"> Live Demo </a></Button >
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        )
    } else if (this.state.activeTab === 2) {
        return (
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'300px', background: 'url(https://lokisixonenine.com/assets/images/scheduler.png) center / cover'}}>Simple Work Scheduler</CardTitle> 
                <CardText>This quick app can help you plan your day especially if you are at home quarantined and need to be productive during typical work hours.</CardText>
                <CardActions border>
                    < Button colored > < a href = "https://github.com/lokisixonenine/Work_day_scheduler" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    < Button colored > < a href = "https://lokisixonenine.github.io/Work_day_scheduler/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        )
    } else if (this.state.activeTab === 3) {
        return (
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'300px', background: 'url(https://lokisixonenine.com/assets/images/wireframe.png) center / cover'}}>Talk Geeky To Me</CardTitle> 
                <CardText>This group project allowed my team and I to create a really nifty app that you can use to translate English to select fictional languages from some of today's most popular fantasy and science fiction franchises.</CardText>
                <CardActions border>
                    < Button colored > < a href = "https://github.com/carabunnell/project_one_ucsd" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    < Button colored > < a href = "https://carabunnell.github.io/project_one_ucsd/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        )
    } else if(this.state.activeTab === 4) {
        return (
            <Card shadow={5} style={{minWidth:'450', margin: 'auto'}}>
                <CardTitle style={{color: 'black', height:'300px', background: 'url(https://lokisixonenine.github.io/ResponsivePortfolio/assets/images/scrawlTN.png) center / cover'}}>Scrawl - Microblogging</CardTitle> 
                <CardText>The second group project that my team and I worked on was this simple microblogging application that puts you back in control of your social media. Instead of trying to promote the sharing of your ideas to the vast majority of random people, this app helps you focus on sharing your stories with a smaller, intimate, group that you select.</CardText>
                <CardActions border>
                    < Button colored > < a href = "https://github.com/carabunnell/project_2" rel="noopener noreferrer" target="_blank">Github</a></Button>
                    < Button colored > < a href = " https://writersblawk.herokuapp.com/" rel="noopener noreferrer" target="_blank">Live Demo</a></Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name = "share" />
                </CardMenu>
            </Card>
        )
    }
}

    render() {
        return(
        <div className = "category-tabs">
            <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState ({ activeTab: tabId })} ripple>
                <Tab>Password Generator</Tab>
                <Tab>ClapTrap Bad Math Game</Tab>
                <Tab>Simple Work Scheduler</Tab>
                <Tab>Geeky Language Translator</Tab>
                <Tab>Scrawl - Microblogging</Tab>
            </Tabs>
            <section className = "projects-grid"> 
            <Grid className="projects-grid">
                <Cell col={12}>
                    <div className = "content">{this.toggleCategories()}</div>
                </Cell>
            </Grid>
            
            </section>
        </div>
        )
    }
}

export default Projects;