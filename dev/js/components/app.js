'use strict';

import React from 'react';
import ButtonContainer from '../containers/buttonContainer'

export default class App extends React.Component {
  render() {
    return(
      <div>
        <h1>Hello Redux world</h1>
        <ButtonContainer />
      </div>
    );
  }
}
