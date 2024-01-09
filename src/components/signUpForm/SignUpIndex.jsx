import {Formik} from 'formik';
import * as yup from 'yup';
import useSignUp from '../../hooks/useSignUp';
import {useNavigate} from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be 5 characters or longer')
    .max(30, 'Username must be less than 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be 6 characters or longer')
    .max(30, 'Password must be less than 30 characters')
    .required('Password is required'),
});

export const SignInContainer = () => {
  const [signUp, result] = useSignUp();
  const navigate = useNavigate();

  const onSubmit = async values => {
    const {username, password} = values;
    try {
      await signUp({username, password});
      if (result.data) {
        await useSignIn({username, password})
        navigate('/');
      } else if (result.error) {
        console.log('Sign in error:', result.error);
      }
    } catch (e) {
      console.log('Sign in error:', e);
    }
  };
  return <SignInIndex onSubmit={onSubmit} />;
};

const SignInIndex = ({onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({handleSubmit}) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInIndex;
