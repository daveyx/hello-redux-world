'use strict';

import React from 'react';
import ButtonContainer from '../containers/buttonContainer';
import UserInfoContainer from '../containers/userInfoContainer';

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello Redux world</h1>
        <UserInfoContainer />
        <ButtonContainer />
      </div>
    );
  }
}
