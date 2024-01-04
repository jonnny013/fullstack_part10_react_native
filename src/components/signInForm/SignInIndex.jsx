import {Formik} from 'formik';
import SignIn from './SignIn';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import AuthStorage from '../../utils/authStorage';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be 5 characters or longer')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be 6 characters or longer')
    .required('Password is required')
})

const SignInIndex = ({setToken}) => {
  
  const [signIn ] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const {username, password} = values;
    try {
      const {data} = await signIn({username, password});
      const authStorage = new AuthStorage();
      authStorage.setAccessToken({token: data.authenticate.accessToken});
      setToken({token: data.authenticate.accessToken})
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInIndex;
