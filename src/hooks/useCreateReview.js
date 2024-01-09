import {useMutation} from '@apollo/client';
import {CREATE_REVIEW} from '../graphql/mutations';

const useCreateReview = () => {
  
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ownerName, repositoryName, rating, text}) => {
    try {
      const review = {ownerName, repositoryName, rating, text};
      const {data} = await mutate({variables: {review}});
      return data;
    } catch (error) {
      console.error('Review error', error.message);
      return error;
    }
  };

  return [createReview, result];
};

export default useCreateReview;
