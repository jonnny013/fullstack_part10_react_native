import {View} from 'react-native';
import React from 'react';
import SortRepoList from './SortRepoList';
import RepoSearchBar from './RepoSearchBar';

const ReposHeader = ({handleItemPress, setSearchKeyword, searchKeyword}) => {
  return (
    <View>
      <RepoSearchBar setSearchKeyword={setSearchKeyword} searchKeyword={searchKeyword} />
      <SortRepoList handleItemPress={handleItemPress} />
    </View>
  );
};

export default ReposHeader;
