'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Button from '../components/button'

class ButtonContainer extends React.Component {
  render() {
    return(
      <Button buttonText={this.props.buttonText} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    buttonText: state.activeState.buttonText
  }
}

export default connect(mapStatesToProps)(ButtonContainer);
