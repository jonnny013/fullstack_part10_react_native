import {useMutation} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import {useContext} from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';
import AuthStorage from '../utils/authStorage';


const useSignIn = () => {
  //const authStorageCont = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({username, password}) => {
    try {
      const credentials = {username, password};
      const { data } = await mutate({variables: {credentials}});
      const authStorage = new AuthStorage
      await authStorage.setAccessToken(data.authenticate.accessToken);
      return {data}
    } catch (error) {
      console.error('Sign in error: ', error.message);
      if (error.networkError) {
        console.error('Network error details:', error.networkError);
      }
      return error
    }
  };

  return [signIn, result];
};

export default useSignIn;
