import React, { Component } from 'react';

import { Header, MainContainer } from './components/styled-components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isToggleStart: true,
    };
  }

  reactStart = () => {
    this.setState(prevState => ({
      isToggleStart: !prevState.isToggleStart,
    }));
  };
  render() {
    return (
      <div className="App">
        <Header className="App-header">
          <h1 className="App-title">React Starter</h1>
        </Header>
        <MainContainer>
          <h2>{this.state.isToggleStart ? 'not start yet' : 'start!!!!!!'}</h2>
          <button onClick={this.reactStart}>{this.state.isToggleStart ? 'start' : 'stop'}</button>
        </MainContainer>
      </div>
    );
  }
}

export default App;
