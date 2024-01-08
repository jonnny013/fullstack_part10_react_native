import { StyleSheet, View } from 'react-native'
import Text from '../Text';
import theme from '../../theme';
import {format } from 'date-fns'
const styles = StyleSheet.create({
  mainCard: {
    flex: 1,
    backgroundColor: theme.colors.cardBackground,
    display: 'flex',
    flexDirection: 'row',
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
  }
});



const ReviewItem = ({review}) => {
  console.log('item', review)
  return (
    <View style={styles.mainCard}>
      <View style={styles.reviewNumber}>
        <Text fontWeight='bold' style={styles.numberText}>{review.rating}</Text>
      </View>
      <View style={styles.infoDiv}>
        <Text fontWeight='bold'>{review.user.username}</Text>
        <Text color='textSecondary'>{format(new Date(review.createdAt), 'dd-MM-yyyy' )}</Text>
        <Text style={styles.description}>{review.text}</Text>
      </View>
    </View>
  );
}

export default ReviewItem