import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Text from '../Text';
import theme from '../../theme';
import AppBarTab from './AppBarTab';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarbackground,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed')}>
        <AppBarTab tabName='Repositories' />
      </Pressable>
    </View>
  );
};

export default AppBar;
