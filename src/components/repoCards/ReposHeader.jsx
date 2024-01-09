
import React from 'react';
import SortRepoList from './SortRepoList';


const ReposHeader = ({handleItemPress}) => {
  return (

      <SortRepoList handleItemPress={handleItemPress} />
  );
};

export default ReposHeader;
