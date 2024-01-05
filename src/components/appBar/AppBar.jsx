import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import {Link, useNavigate} from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import {useEffect, useState} from 'react';

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
  const [token, setToken] = useState(null);
  const authStorage = useAuthStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = async () => {
      const accessToken = await authStorage.getAccessToken();
      setToken(accessToken);
    };

    fetchAccessToken();
  }, [authStorage]);

  const handleSignOut = () => {
    authStorage.removeAccessToken();
    setToken(null);
    navigate('/');
  };
  console.log(token)
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <AppBarTab tabName='Repositories' />
        </Link>
        {token ? (
          <Pressable onPress={handleSignOut}>
            <AppBarTab tabName='Sign Out' />
          </Pressable>
        ) : (
          <Link to='/SignIn'>
            <AppBarTab tabName='Sign In' />
          </Link>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
