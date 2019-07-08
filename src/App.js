import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';

class App extends Component {
  state = {
    //TODO: this needs to pull out information for what the navigation bars should have
    //through the database
    topNav: [
      {
        id: 1,
        title: 'Profile'
      },
      { 
        id: 2,
        title: 'Notifications'
      },
      {
        id: 3,
        title: "Messages"
      },
      {
        id: 4,
        title: "Settings"
      }
    ],
    leftNav: [
      {
        id: 1,
        title: 'Messaging',
        enabled: true
      },
      {
        id: 2,
        title: 'Community',
        enabled: false
      },
      {
        id: 3,
        title: 'Tracking',
        enabled: true
      }
    ]
  }

  expanded = (id) => {  
    this.setState({ leftNav: this.state.leftNav.map(leftNav => {
      if(leftNav.id === id){
        leftNav.enabled = !leftNav.enabled
      }
      return leftNav;
    }) });
  }

  render() {
    return (
      <div className="App">
        <div id="topNavWrapper">
          <TopNav topNav={ this.state.topNav }/>
        </div>
        <div id="leftNavWrapper">
          <LeftNav leftNav={ this.state.leftNav } expanded={this.expanded} />
        </div>
        <div id="contentWrapper">
        
        </div>
      </div>
    );
  }
}

export default App;
 