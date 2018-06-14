/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,Button,NativeModules } from "react-native";
import PropTypes from 'prop-types';

var ToastAndroid = NativeModules.ToastAndroid;
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap RR on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const onButtonPress = () => {
  ToastAndroid.show('Awesome', ToastAndroid.LONG);
  console.log("test");
 };

export default class App extends Component {
  static propTypes = {
    button: PropTypes.string,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title={this.props.button} onPress={onButtonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
