import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { GlobalWrapper } from './components/styled-components';

import NewEvent from './containers/NewEvent';

const Home = () => (
  <div>
    <h1>🍖</h1>
  </div>
);

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
        <Route exact path="/" component={Home} />
        <Route path="/new" component={NewEvent} />
      </GlobalWrapper>
    );
  }
}

export default App;
