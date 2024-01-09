import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';

import {GET_REPOSITORIES} from '../graphql/queries';

const useRepositories = ({orderBy, orderDirection}) => {
  const [repositories, setRepositories] = useState();
  const {data, error, loading} = useQuery(GET_REPOSITORIES, {
    variables: {orderBy, orderDirection},
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    if (data) {
      setRepositories(data.repositories);
    }
  }, [loading, error, data]);
  return {repositories, loading, error};
};

export default useRepositories;
