import {useMutation} from '@apollo/client';
import {DELETE_REVIEW} from '../graphql/mutations';


const useDeleteReview = () => {
  
  const [mutate, result] = useMutation(DELETE_REVIEW);

  const deleteReview = async ({deleteReviewId}) => {
    try {
      const {data} = await mutate({variables: {deleteReviewId}});
      return data;
    } catch (error) {
      console.error('Deletion error', error.message);
      return error;
    }
  };

  return [deleteReview, result];
};

export default useDeleteReview;
