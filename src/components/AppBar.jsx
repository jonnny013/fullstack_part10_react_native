import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Text from './Text';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    background: 'black'
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed')}>
        <Text style={{fontSize: 20}}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
