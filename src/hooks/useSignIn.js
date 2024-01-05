import {useMutation} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import {useContext} from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({username, password}) => {
    try {
      const credentials = {username, password};
      const {data } = await mutate({variables: {credentials}});
      console.log(data)
      authStorage.setAccessToken({token: data.authenticate.accessToken});
      return data
    } catch (error) {
      console.error('Sign in error', error.message);
      return error
    }
  };

  return [signIn, result];
};

export default useSignIn;
