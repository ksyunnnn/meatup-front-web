import React, { Component, Fragment } from 'react';

import {
  InputContainer,
  Input,
  InputTitle,
  SubmitButton,
  InputStrings,
} from '../../components/styled-components';

const NewEventName = props => (
  <Fragment>
    <Input
      name="name"
      type="text"
      value={props.newEvent.name}
      onChange={props.handleChange}
      placeholder="イベント名を設定"
      autoFocus={true}
    />
    <SubmitButton active={props.newEvent.name.length > 0} type="submit" value="次へ" />
  </Fragment>
);

const NewEventId = props => (
  <Fragment>
    <InputTitle>イベントIDを設定</InputTitle>
    <InputStrings>meatup.love/</InputStrings>
    <Input
      name="id"
      type="text"
      value={props.newEvent.id}
      onChange={props.handleChange}
      placeholder="your-id"
      autoFocus={true}
      withStrings
    />
    <SubmitButton active={props.newEvent.id.length > 0} type="submit" value="次へ" />
  </Fragment>
);

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonActive: false,
      pagination: 0,
      newEvent: {
        name: '',
        id: '',
        date: '',
      },
    };
  }

  handleChangeName = event => {
    const target = event.target;
    this.setState(prevState => {
      const newState = prevState;

      newState.buttonActive = target.value.length > 0 ? true : false;
      newState.newEvent.name = target.value;
      return newState;
    });
  };

  handleChangeId = event => {
    const target = event.target;
    this.setState(prevState => {
      const newState = prevState;

      newState.buttonActive = target.value.length > 0 ? true : false;
      newState.newEvent.id = target.value;
      return newState;
    });
  };

  handleSubmit = event => {
    if (this.state.buttonActive) {
      this.setState(prevState => ({
        buttonActive: false,
        pagination: prevState.pagination + 1,
      }));
    }
    event.preventDefault();
  };

  paginationBack = () => {
    if (this.state.pagination > 0)
      this.setState(prevState => ({ pagination: prevState.pagination - 1 }));
  };

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'componentDidUpdate',
      'prevProps',
      prevProps,
      'prevState',
      prevState,
      'snapshot',
      snapshot,
    );
  }

  render() {
    return (
      <div className="new-app">
        <InputContainer>
          <form onSubmit={this.handleSubmit}>
            {this.state.pagination == 0 ? (
              <NewEventName {...this.state} handleChange={this.handleChangeName} />
            ) : this.state.pagination == 1 ? (
              <NewEventId {...this.state} handleChange={this.handleChangeId} />
            ) : null}
          </form>
        </InputContainer>
      </div>
    );
  }
}

export default NewEvent;
