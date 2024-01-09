import {FlatList, View, StyleSheet} from 'react-native';
import RepositoryItem from './RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import React, { useState, Component} from 'react';
import Text from '../Text';
import ReposHeader from './ReposHeader';
import {useDebounce} from 'use-debounce';
import RepoSearchBar from './RepoSearchBar';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

class RepositoryListContainer extends Component {
  render() {
    const {repositories, handleItemPress, setSearchKeyword, searchKeyword} = this.props;
    const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <RepositoryItem repo={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <ReposHeader
            handleItemPress={handleItemPress}
            setSearchKeyword={setSearchKeyword}
            searchKeyword={searchKeyword}
          />
        )}
      />
    );
  }
}


const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState('CREATED_AT');
  const [orderDirection, setOrderDirection] = useState('DESC');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [value] = useDebounce(searchKeyword, 1000);
  const {repositories, loading, error} = useRepositories({
    orderBy,
    orderDirection,
    searchKeyword: value,
  });
  
  console.log('value', value);

  const handleItemPress = type => {
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

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!repositories) {
    return <Text>No repos found</Text>;
  }

  return (
    <>
      <RepoSearchBar setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
      <RepositoryListContainer
        repositories={repositories}
        handleItemPress={handleItemPress}
        setSearchKeyword={setSearchKeyword}
        searchKeyword={searchKeyword}
      />
    </>
  );
};

export default RepositoryList;
