import {StyleSheet, View} from 'react-native';
import {Route, Routes, Navigate} from 'react-router-native';
import RepositoryList from './repoCards/RepositoryList';
import AppBar from './appBar/AppBar';
import theme from '../theme';

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
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <RepositoryList />
    </View>
  );
};

export default Main;
