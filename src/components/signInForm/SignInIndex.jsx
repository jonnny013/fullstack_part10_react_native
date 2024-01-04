import {Formik, useField} from 'formik';
import SignIn from './SignIn';

const initialValues = {
  username: '',
  password: ''
}
 
 const SignInIndex = () => {
const onSubmit = values => {
  console.log(values);
};

   return (
     <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleSubmit}) => <SignIn onSubmit={handleSubmit} />}
     </Formik>
   )
 }
 
 export default SignInIndex