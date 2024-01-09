import {View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const RepoSearchBar = ({setSearchKeyword, searchKeyword}) => {
  return (
    <View>
      <TextInput
        label='Repository search'
        value={searchKeyword}
        onChangeText={text => setSearchKeyword(text)}
      />
    </View>
  );
};

export default RepoSearchBar;
