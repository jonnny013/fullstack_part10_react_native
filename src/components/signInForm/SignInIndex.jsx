import {Formik, useField} from 'formik';
import SignIn from './SignIn';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(6, 'Username must be 6 characters or longer')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password must be 6 characters or longer')
    .required('Password is required')
})

const SignInIndex = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignIn onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInIndex;
