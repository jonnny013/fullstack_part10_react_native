import { useState } from 'react'
import { List } from 'react-native-paper';

const SortRepoList = ({handleItemPress}) => {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  

  return (
    <List.Section>
      <List.Accordion
        title='Sort Repositories'
        left={props => <List.Icon {...props} icon='sort-reverse-variant' />}
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item
          onPress={() => handleItemPress('time-desc')}
          title='Latest Repositories'
        />
        <List.Item
          onPress={() => handleItemPress('rating-desc')}
          title='Highest Rated Repositories'
        />
        <List.Item
          onPress={() => handleItemPress('rating-asc')}
          title='Lowest Rated Repositories'
        />
      </List.Accordion>
    </List.Section>
  );
};

export default SortRepoList