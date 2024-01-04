import {StyleSheet, View} from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native';
import RepositoryList from './repoCards/RepositoryList';
import AppBar from './appBar/AppBar';
import theme from '../theme';
import SignInIndex from './signInForm/SignInIndex';
import AuthStorage from '../utils/authStorage';
import {useState, useEffect} from 'react'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
});


const Main = () => {
  const authStorage = new AuthStorage()
  const [token, setToken] = useState(null)
  
  const getAccessToken = async () => {
    const accessToken = await authStorage.getAccessToken();
    setToken(accessToken)
  };

  useEffect(() => {getAccessToken()}, [])

  return (
    <View style={styles.container}>
      <AppBar token={token} setToken={setToken} />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/SignIn' element={<SignInIndex setToken={setToken} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
