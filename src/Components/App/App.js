import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

import HeaderContainer from '../HeaderContainer/HeaderContainer';
import DashboardContainer from '../DashboardContainer/DashboardContainer';

class App extends Component {
  
  render() {
    const style = {
    
    }
    return (
      <div className="App">
        <HeaderContainer />
        <DashboardContainer />
      </div>
    );
  }
}

export default App;
