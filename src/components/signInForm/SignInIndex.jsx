import {Formik} from 'formik';
import SignIn from './SignIn';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
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

export const SignInContainer = () => {
  const [signIn, result ] = useSignIn();
  const navigate = useNavigate();
  console.log('result',result)
  const onSubmit = async (values) => {
    const {username, password} = values;
    try {
      await signIn({username, password});
      if (result.data) {
        navigate('/');
      } else if (result.error) {
        console.log('Sign in error:', result.error);
      }
      
    } catch (e) {
      console.log('Sign in error:', e);
    }
  };
  return (<SignInIndex onSubmit={onSubmit} />)
}

const SignInIndex = ({onSubmit}) => {


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInIndex;
