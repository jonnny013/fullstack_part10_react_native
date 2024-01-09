import { View, FlatList, StyleSheet, Alert } from 'react-native'
import React from 'react'
import useClient from '../../hooks/useClient'
import theme from '../../theme';
import ReviewItem from './ReviewItem'
import Text from '../Text';
import useDeleteReview from '../../hooks/useDeleteReview';


const styles = StyleSheet.create({
  headShot: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius: 7,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  linkContainer: {
    backgroundColor: theme.colors.languageBackground,
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
  mainCard: {
    backgroundColor: theme.colors.cardBackground,
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
  const {client, loading, error, refetch} = useClient({includeReviews: true})

const [deleteReview] = useDeleteReview();

const handleDeleteReview = async id => {
  const deleteNow = async id => {
    try {
      await deleteReview(id);
      refetch()
    } catch (e) {
      console.log('Deletion error:', e);
    }
  };
  Alert.alert('Delete Review', 'Are you sure you want to delete this review?', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancelled'),
      style: 'cancel',
    },
    {
      text: 'Delete',
      onPress: () => deleteNow(id),
    },
  ]);
};


if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!client) {
    return <Text>No repo found</Text>;
  }

  const reviews = client ? client.reviews.edges.map(edge => edge.node) : [];
  if (reviews.length === 0) {
    // eslint-disable-next-line react/no-unescaped-entities
    return <Text style={styles.mainCard} fontWeight='bold'>You haven't made any reviews yet!</Text>
  }
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <ReviewItem review={item} handleDeleteReview={handleDeleteReview} />}
      keyExtractor={item => item.id}
    />
  );
}

export default MyReviews



