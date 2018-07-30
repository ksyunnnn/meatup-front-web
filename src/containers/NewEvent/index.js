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

const NewEventDate = props => (
  <Fragment>
    <InputTitle>開催日時を設定</InputTitle>
    <Input
      name="date"
      type="text"
      value={props.newEvent.date}
      onChange={props.handleChange}
      placeholder="2018.08.22 14:00"
      autoFocus={true}
    />
  <SubmitButton active={props.newEvent.date.length > 0} type="submit" value="次へ" />
  </Fragment>
);

const NewEventLocation = props => (
  <Fragment>
    <InputTitle>開催場所を設定</InputTitle>
    <Input
      name="date"
      type="text"
      value={props.newEvent.location}
      onChange={props.handleChange}
      placeholder="渋谷区宇田川5-5 焼き肉ビル"
      autoFocus={true}
    />
  <SubmitButton active={props.newEvent.location.length > 0} type="submit" value="次へ" />
  </Fragment>
);

const NewEventSuccess = props => (
  <Fragment>
    <tr>
      <th>name</th>
      <td>{props.name}</td>
    </tr>
    <tr>
      <th>id</th>
      <td>{props.id}</td>
    </tr>
    <tr>
      <th>date</th>
      <td>{props.date}</td>
    </tr>
    <tr>
      <th>location</th>
      <td>{props.location}</td>
    </tr>
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
        location: '',
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

  handleChangeDate = event => {
    const target = event.target;
    this.setState(prevState => {
      const newState = prevState;

      newState.buttonActive = target.value.length > 0 ? true : false;
      newState.newEvent.date = target.value;
      return newState;
    });
  };

  handleChangeLocation = event => {
    const target = event.target;
    this.setState(prevState => {
      const newState = prevState;

      newState.buttonActive = target.value.length > 0 ? true : false;
      newState.newEvent.location = target.value;
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
            ) : this.state.pagination == 2 ? (
              <NewEventDate {...this.state} handleChange={this.handleChangeDate} />
            ) : this.state.pagination == 3 ? (
              <NewEventLocation {...this.state} handleChange={this.handleChangeLocation} />
            ) : this.state.pagination == 4 ? (
              <NewEventSuccess {...this.state.newEvent} />
            ) : null}
          </form>
        </InputContainer>
      </div>
    );
  }
}

export default NewEvent;
