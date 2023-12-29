import Text from "./Text"
import theme from "../theme";
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textWithBackgrouond,
    fontSize: 20,
    padding: 20,
  },
});

const AppBarTab = ({tabName}) => {
  return (
    <Text style={styles.text} fontWeight='bold'>
     {tabName}
    </Text>
  );
}

export default AppBarTab