import {View, Image, StyleSheet, Text} from 'react-native';
import NumbersBox from './NumbersBox';
import theme from '../../theme';
import PersonalInfo from './PersonalInfo';
import useSingleRepo from '../../hooks/useSingleRepo'
import { useLocation } from 'react-router-native';

const styles = StyleSheet.create({
  headShot: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 7,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  language: {
    backgroundColor: theme.colors.languageBackground,
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 3,
  },
  languageText: {
    color: theme.colors.textWithBackground,
    marginLeft: 6,
    marginRight: 6,
  },
  mainCard: {
    backgroundColor: theme.colors.cardBackground,
  },
});

const SingleRepoDisplay = ({repo}) => {
  return (
    <View style={styles.mainCard} testID='repositoryItem'>
      <View style={styles.topContainer}>
        <Image style={styles.headShot} source={{uri: repo.ownerAvatarUrl}} />
        <PersonalInfo repo={repo} />
      </View>

      <View style={styles.bottomContainer}>
        <NumbersBox text='Stars' number={repo.stargazersCount} />
        <NumbersBox text='Forks' number={repo.forksCount} />
        <NumbersBox text='Reviews' number={repo.reviewCount} />
        <NumbersBox text='Ratings' number={repo.ratingAverage} />
      </View>
    </View>
  );
};

const SingleRepo =  () => {
  const {state} = useLocation();

  const id = state.id

  const {repository, loading, error} = useSingleRepo({repositoryId: id});
  
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!repository) {
    return <Text>No repo found</Text>;
  }
  return (<SingleRepoDisplay repo={repository} />)
}

export default SingleRepo;
