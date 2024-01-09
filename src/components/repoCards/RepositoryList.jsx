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
  const [orderDirection, setOrderDirection] = useState('ASC');
  const {repositories} = useRepositories();

  const handleItemPress = type => {
    console.log(type);
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      handleItemPress={handleItemPress}
    />
  );
};

export default RepositoryList;
