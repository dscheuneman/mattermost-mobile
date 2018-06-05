import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Zero extends PureComponent {

  render() {
    return (
      <View style={styles.container}>
      <Text>Woot Component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
