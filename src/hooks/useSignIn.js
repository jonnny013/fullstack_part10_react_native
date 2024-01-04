import {useMutation} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import {useAuthStorage} from './useAuthStorage'

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({username, password}) => {
    try {
      const credentials = {username, password};
      const response = await mutate({variables: {credentials}});
      authStorage(response)
      return response
    } catch (error) {
      console.error('Sign in error', error.message);
      return error
    }
  };

  return [signIn, result];
};

export default useSignIn;
