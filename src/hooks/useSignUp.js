import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const signIn = async ({username, password}) => {
    try {
      const user = {username, password};
      const {data} = await mutate({variables: {user}});
      return data;
    } catch (error) {
      console.error('Sign in error', error.message);
      return error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
