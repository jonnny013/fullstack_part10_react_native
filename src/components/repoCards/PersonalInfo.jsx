import {View, StyleSheet} from 'react-native';
import Text from '../Text';
import Subheading from '../Subheading';
import theme from '../../theme';

const styles = StyleSheet.create({
  language: {
    backgroundColor: theme.colors.languageBackground,
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 3,
  },
  languageText: {
    color: theme.colors.textWithBackground,
    marginLeft: 6,
    marginRight: 6,
  },
  container: {
    flex: 1,
    margin: 5,
    paddingRight: 5,
  },
  margins: {
    marginBottom: 8,
  },
});

const PersonalInfo = ({repo}) => {
  return (
    <View style={styles.container}>
      <Subheading style={styles.margins}>{repo.fullName}</Subheading>
      <Text style={[styles.margins]}>{repo.description}</Text>
      <View style={[styles.language, styles.margins]}>
        <Text style={styles.languageText} fontWeight='bold'>
          {repo.language}
        </Text>
      </View>
    </View>
  );
};

export default PersonalInfo;
