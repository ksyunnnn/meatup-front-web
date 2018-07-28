import React, { Component } from 'react';

import { GlobalWrapper } from './components/styled-components';

import NewEvent from './containers/NewEvent';

class App extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   event
    // };
  }

  reactStart = () => {
    this.setState(prevState => ({
      isToggleStart: !prevState.isToggleStart,
    }));
  };

  render() {
    return (
      <GlobalWrapper>
        <NewEvent />
      </GlobalWrapper>
    );
  }
}

export default App;
