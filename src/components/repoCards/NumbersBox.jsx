import {View, StyleSheet} from 'react-native';
import React from 'react';
import Text from '../Text';
import Numbers from './Numbers';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
});

const NumbersBox = ({text, number}) => {
  return (
    <View style={styles.container}>
      <Numbers number={number} />
      <Text color='textSecondary' style={{textAlign: 'center'}}>
        {text}
      </Text>
    </View>
  );
};

export default NumbersBox;
