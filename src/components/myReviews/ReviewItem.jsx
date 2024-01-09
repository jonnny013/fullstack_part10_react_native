import { StyleSheet, View, Pressable } from 'react-native'
import Text from '../Text';
import theme from '../../theme';
import {format } from 'date-fns'
import { useNavigate } from 'react-router-native';
const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    display: 'flex',
    justifyContent: 'space-around',
    height: '100%',
  },
  reviewNumber: {
    borderWidth: 3,
    borderColor: theme.colors.languageBackground,
    borderRadius: 50,
    height: 50,
    width: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  numberText: {
    color: theme.colors.languageBackground,
  },
  infoDiv: {
    margin: 10,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  description: {
    marginTop: 10,
  },
  linkContainer: {
    backgroundColor: theme.colors.languageBackground,
    margin: 9,
    borderRadius: 5,
    padding: 9,
  },
  deleteContainer: {
    backgroundColor: 'red',
    margin: 9,
    borderRadius: 5,
    padding: 9,
  },
  linkText: {
    color: theme.colors.textWithBackground,
    marginLeft: 6,
    marginRight: 6,
    textAlign: 'center',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});



const ReviewItem = ({review}) => {
  const navigate = useNavigate()
  return (
    <View style={styles.mainCard}>
      <View style={styles.topContainer}>
        <View style={styles.reviewNumber}>
          <Text fontWeight='bold' style={styles.numberText}>
            {review.rating}
          </Text>
        </View>
        <View style={styles.infoDiv}>
          <Text fontWeight='bold'>{review.repository.fullName}</Text>
          <Text color='textSecondary'>
            {format(new Date(review.createdAt), 'dd-MM-yyyy')}
          </Text>
          <Text style={styles.description}>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={styles.linkContainer}
          onPress={() => navigate(`/repos/${review.repository.id}`)}
        >
          <Text fontWeight='bold' style={styles.linkText}>
            View Repository
          </Text>
        </Pressable>
        <Pressable
          style={styles.deleteContainer}
          onPress={() => console.log('delete')}
        >
          <Text fontWeight='bold' style={styles.linkText}>
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ReviewItem