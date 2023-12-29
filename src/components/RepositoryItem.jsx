import {View, Image, StyleSheet} from 'react-native';
import Text from './Text';
import Numbers from './repoCards/Numbers';
import NumbersBox from './repoCards/NumbersBox';

const styles = StyleSheet.create({
  headShot: {
    width: 50,
    height: 50,
  },
});

const RepositoryItem = ({repo}) => {
  return (
    <View>
      <Image style={styles.headShot} source={{uri: repo.ownerAvatarUrl}} />
      <Text>Full name: {repo.fullName}</Text>
      <Text>Description: {repo.description}</Text>
      <Text>Language: {repo.language}</Text>

      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <NumbersBox text='Stars' number={repo.stargazersCount} />
        <NumbersBox text='Forks' number={repo.forksCount} />
        <NumbersBox text='Reviews' number={repo.reviewCount} />
        <NumbersBox text='Ratings' number={repo.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
