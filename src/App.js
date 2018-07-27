import React, { Component } from 'react';

import { GlobalWrapper } from './components/styled-components';


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
      <GlobalWrapper>
      </GlobalWrapper>
    );
  }
}

export default App;
