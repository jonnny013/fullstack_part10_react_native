import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarbackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/'>
        <AppBarTab tabName='Repositories' />
      </Link>
      <Link to='/SignIn'>
        <AppBarTab tabName='Sign In' />
      </Link>
    </View>
  );
};

export default AppBar;
