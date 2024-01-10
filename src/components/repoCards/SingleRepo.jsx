import {View, Image, StyleSheet, Pressable, FlatList} from 'react-native';
import Text from '../Text';
import NumbersBox from './NumbersBox';
import theme from '../../theme';
import PersonalInfo from './PersonalInfo';
import useSingleRepo from '../../hooks/useSingleRepo';
import {useParams} from 'react-router-native';
import * as Linking from 'expo-linking';
import ReviewItem from './ReviewItem';

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
  linkContainer: {
    backgroundColor: theme.colors.languageBackground,
    margin: 9,
    borderRadius: 5,
    padding: 9,
  },
  linkText: {
    color: theme.colors.textWithBackground,
    marginLeft: 6,
    marginRight: 6,
    textAlign: 'center',
  },
  mainCard: {
    backgroundColor: theme.colors.cardBackground,
    marginBottom: 10
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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
      <View style={styles.linkContainer}>
        <Pressable onPress={() => Linking.openURL(repo.url)}>
          <Text fontWeight='bold' style={styles.linkText}>
            Open in GitHub
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const SingleRepo = () => {
  const {id} = useParams();

  const {repository, loading, error, fetchMore} = useSingleRepo({repositoryId: id, first: 4});

  const onEndReach = () => {
    fetchMore()
  }

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!repository) {
    return <Text>No repo found</Text>;
  }

  const reviews = repository ? repository.reviews.edges.map(edge => edge.node) : [];
  
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <ReviewItem review={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <SingleRepoDisplay repo={repository} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepo;
