import {useMutation, useApolloClient} from '@apollo/client';
import {SIGN_IN} from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({username, password}) => {
    try {
      const credentials = {username, password};
      const {data} = await mutate({variables: {credentials}});
      authStorage.setAccessToken({token: data.authenticate.accessToken});
      await client.resetStore();
      return data;
    } catch (error) {
      console.error('Sign in error', error.message);
      return error;
    }
  };

  return [signIn, result];
};

export default useSignIn;
