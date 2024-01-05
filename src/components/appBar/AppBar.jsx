import {View, StyleSheet, ScrollView, Pressable} from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import {Link, useNavigate} from 'react-router-native';
import useAuthStorage from '../../hooks/useAuthStorage';
import {GET_CLIENT} from '../../graphql/queries';
import {useQuery, useApolloClient} from '@apollo/client';



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
  const client = useApolloClient()
  
  const authStorage = useAuthStorage();
  const navigate = useNavigate();
  const {data} = useQuery(GET_CLIENT);
  

  const handleSignOut = async () => {
    await authStorage.removeAccessToken();
    client.resetStore();
    navigate('/');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/'>
          <AppBarTab tabName='Repositories' />
        </Link>
        {data && data.me ? (
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
