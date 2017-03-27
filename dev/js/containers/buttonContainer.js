'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '../components/button';
import {clickButtonAction} from '../actions/index';
import {resetAction} from '../actions/index';

const clickedState = {
    userInfo: "Click the button for change the state and display a message",
    message: "successfully clicked the button, click again for reset",
    buttonText: "reset"
}

class ButtonContainer extends React.Component {
  render() {
    let handler = this.props.buttonText === "reset" ? () => this.props.reset() : () => this.props.clickButton(clickedState);
    return(
      <Button buttonText={this.props.buttonText} clickHandler={handler} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    buttonText: state.activeState.buttonText
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    clickButton: clickButtonAction,
    reset: resetAction
  }, dispatch)
}

export default connect(mapStatesToProps, matchDispatchToProps)(ButtonContainer);
