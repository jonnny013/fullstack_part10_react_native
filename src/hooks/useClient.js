import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';

import {GET_CLIENT} from '../graphql/queries';

const useClient = ({includeReviews}) => {
  const [client, setClient] = useState();
  const {data, error, loading, refetch} = useQuery(GET_CLIENT, {
    variables: {includeReviews},
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    if (data) {
      setClient(data.me);
    }
  }, [loading, error, data, refetch]);

  return {client, loading, error, refetch};
};

export default useClient;
