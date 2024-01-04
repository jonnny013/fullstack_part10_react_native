import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import {Link, useNavigate} from 'react-router-native';
import AuthStorage from '../../utils/authStorage';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarbackground,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const AppBar = ({setToken, token}) => {
  const authStorage = new AuthStorage();
  const navigate = useNavigate();

  const handleSignOut = () => {
    authStorage.removeAccessToken();
    setToken(null)
    navigate('/');
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <AppBarTab tabName='Repositories' />
        </Link>
        {token ? <Pressable onPress={handleSignOut}>
          <AppBarTab tabName='Sign Out' />
        </Pressable> : <Link to='/SignIn'>
          <AppBarTab tabName='Sign In' />
        </Link>}
        
      </ScrollView>
    </View>
  );
};

export default AppBar;
