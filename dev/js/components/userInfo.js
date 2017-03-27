'use strict';

import React from 'react';

export default class UserInfo extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.userInfo}</p>
        {this.props.message ? <p>{this.props.message}</p> : null}
      </div>
    );
  }
}
