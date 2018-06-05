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
      <Text style={styles.text}>Woot Component!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
            color: 'white',
            fontSize: 14,
            fontWeight: '600',
            paddingRight: 40,
            height: '100%',
            textAlignVertical: 'center',
            lineHeight: 44
  }
});
