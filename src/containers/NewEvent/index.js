import React, { Component, Fragment } from 'react';

import {
  InputContainer,
  Input,
  InputTitle,
  SubmitButton,
  InputStrings,
} from '../../components/styled-components';

const NewEventName = props => (
  <Input
    name="name"
    type="text"
    value={props.newEvent.name}
    onChange={props.handleChange}
    placeholder="イベント名を設定"
    autoFocus={true}
  />
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
  </Fragment>
)

class NewEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
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

      newState.active = target.value.length > 0 ? true : false;
      newState.newEvent.name = target.value;
      return newState;
    });
  };

  handleChangeId = event => {
    const target = event.target;
    this.setState(prevState => {
      const newState = prevState;

      newState.active = target.value.length > 0 ? true : false;
      newState.newEvent.id = target.value;
      return newState;
    });
  };

  handleSubmit = event => {
    if (this.state.active) {
      console.log('next');
    }
    event.preventDefault();
  };

  render() {
    return (
      <div className="new-app">
        <InputContainer>
          <form onSubmit={this.handleSubmit}>
            {/*<NewEventName {...this.state} handleChangeName={this.handleChangeName}/>*/}

            <NewEventId {...this.state} handleChange={this.handleChangeId}/>


            <SubmitButton active={this.state.active} type="submit" value="次へ" />
          </form>
        </InputContainer>
      </div>
    );
  }
}

export default NewEvent;
