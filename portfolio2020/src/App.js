import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


function App() {
  return (
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Jaycee's Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Jaycee</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>                
                <Link to="/contact">Contact Jaycee</Link>                                
            </Navigation>
        </Header>
        <Drawer title="Navigation">
            <Navigation>
                <Link to="/">Home</Link>                
                <Link to="/aboutme">About Jaycee</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>                
                <Link to="/contact">Contact Jaycee</Link>  
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            < Main />

        </Content>
    </Layout>
</div>
  );
}

export default App;
