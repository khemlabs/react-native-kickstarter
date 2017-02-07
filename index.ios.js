/**
 * Khem Labs React Native Kickstarter Project
 * https://github.com/khemlabs/react-native-kickstarter
 * @author khemlabs
 */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import AppNative from './js/AppNative'

class RnKickstarter extends Component {
  render() {
    return (
			<AppNative />
    );
  }
}

AppRegistry.registerComponent('RnKickstarter', () => RnKickstarter);
