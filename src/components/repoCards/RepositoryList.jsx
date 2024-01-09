import {FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import SortRepoList from './SortRepoList';
import {useState} from 'react';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({repositories, handleItemPress}) => {
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem repo={item} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <SortRepoList handleItemPress={handleItemPress} />}
    />
  );
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const {repositories} = useRepositories();

  const handleItemPress = type => {
    console.log(type);
    switch (type) {
      case 'time-desc':
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
        break;
      case 'rating-desc':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
        break;
      case 'rating-asc':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
        break;
      default:
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
        break;
    }
  };
  console.log(orderBy, orderDirection);
  return (
    <RepositoryListContainer
      repositories={repositories}
      handleItemPress={handleItemPress}
    />
  );
};

export default RepositoryList;
