import {StyleSheet, View} from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native';
import RepositoryList from './repoCards/RepositoryList';
import AppBar from './appBar/AppBar';
import theme from '../theme';
import { SignInContainer } from './signInForm/SignInIndex';
import SingleRepo from './repoCards/SingleRepo'
import ReviewIndex from './createReview/ReviewIndex';
import  SignUpContainer  from './signUpForm/SignUpIndex';
import MyReviews from './myReviews/MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primary,
  },
});


const Main = () => {

  return (
    <View style={styles.container}>
      <AppBar  />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/SignIn' element={<SignInContainer  />} />
        <Route path='/repos/:id' element={<SingleRepo />} />
        <Route path='/createReview' element={<ReviewIndex />} />
        <Route path='/createUser' element={<SignUpContainer />} />
        <Route path='/myReviews' element={<MyReviews />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </View>
  );
};

export default Main;
