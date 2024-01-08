import {Formik} from 'formik';
import * as yup from 'yup';
import {useNavigate} from 'react-router-native';
import ReviewForm from './ReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .min(5, "Owner's name must be 5 characters or longer")
    .required('Name is required'),
  repositoryName: yup
    .string()
    .min(5, "Repository's name must be 5 characters or longer")
    .required('Name is required'),
  rating: yup
    .number('Must be a number')
    .positive('Must be greater than 0')
    .integer('Must be a number')
    .min(0, 'Rating must be at least 0')
    .max(100, 'Rating must be at most 100')
    .required('Rating is required'),
  text: yup
    .string()
    .min(10, "Repository's name must be 10 characters or longer")
    .required('Name is required'),
});

export const ReviewIndex = () => {
  //const [signIn, result] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async values => {
    console.log(values)
    const {ownerName, repositoryName, rating, text} = values;
    try {
      console.log('unfinished')
      if (result.data) {
        navigate('/');
      } else if (result.error) {
        console.log('Sign in error:', result.error);
      }
    } catch (e) {
      console.log('Sign in error:', e);
    }
  };
  return <FormikContainer onSubmit={onSubmit} />;
};

const FormikContainer = ({onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({handleSubmit}) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewIndex;
