import React, { Component } from 'react';

import { GlobalWrapper, RelativeWrapper } from './components/styled-components';

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
        <RelativeWrapper>
          準備中...🍖
        </RelativeWrapper>
      </GlobalWrapper>
    );
  }
}

export default App;
