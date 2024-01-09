import {useEffect, useState} from 'react';
import {useQuery} from '@apollo/client';

import {GET_CLIENT} from '../graphql/queries';

const useClient = ({includeReviews}) => {
  const [client, setClient] = useState();
  const {data, error, loading} = useQuery(GET_CLIENT, {
    variables: {includeReviews},
    fetchPolicy: 'cache-and-network',
  });
  useEffect(() => {
    if (data) {
      setClient(data.me);
    }
  }, [loading, error, data]);

  return {client, loading, error};
};

export default useClient;
