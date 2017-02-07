/**
 * Khem Labs React Native Kickstarter Project
 * https://github.com/khemlabs/react-native-kickstarter
 * @author khemlabs
 */
import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';

import MyScene from './scenes/Scene'

export default class AppNative extends Component {
  render() {
    return  (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

