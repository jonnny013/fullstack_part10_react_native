import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';

import {GET_REPOSITORY} from '../graphql/queries';

const useSingleRepo = ({repositoryId}) => {
  const [repository, setRepository] = useState();
  const {data, error, loading} = useQuery(GET_REPOSITORY, {
    variables: {repositoryId},
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    if (data) {
      setRepository(data.repository);
    }
  }, [loading, error, data]);
  
  return {repository, loading, error};
};

export default useSingleRepo;
