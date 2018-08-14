import React, { Component } from 'react';
import logo from './../logo.svg';
import  margin0 from './../App.css';
import { Segment, Image } from 'semantic-ui-react'

class App extends Component {
  
  handleToggle = () =>{
    console.log('Logo clicked')
    this.props.toggleSideBar()
  }

  render() {
    return (
       <Segment raised  className="margin0">
   
        <Image src={logo} avatar onClick={this.handleToggle}/>
          <span >React Tutorial</span>
       </Segment>
    );
  }
}

export default App;
