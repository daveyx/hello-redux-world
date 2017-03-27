'use strict';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import UserInfo from '../components/userInfo'

class UserInfoContainer extends React.Component {
  render() {
    return(
      <UserInfo userInfo={this.props.userInfo} message={this.props.message} />
    );
  }
}

function mapStatesToProps(state) {
  return {
    userInfo: state.activeState.userInfo,
    message: state.activeState.message
  }
}

export default connect(mapStatesToProps)(UserInfoContainer);
