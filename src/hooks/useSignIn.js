import {useMutation} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({username, password}) => {
    try {
      const credentials = {username, password};
      const response = await mutate({variables: {credentials}});
      return response
    } catch (error) {
      console.error('Sign in error', error.message);
      return error
    }
  };

  return [signIn, result];
};

export default useSignIn;
