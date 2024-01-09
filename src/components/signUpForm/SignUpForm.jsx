import {View, StyleSheet} from 'react-native';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.cardBackground,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  button: {
    margin: 8,
    backgroundColor: theme.colors.button,
    padding: 10,
    borderRadius: 4,
    width: '90%',
  },
  buttonText: {
    color: theme.colors.textWithBackground,
    textAlign: 'center',
  },
});

const SignUpForm = ({onSubmit}) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <FormikTextInput name='passwordConfirm' placeholder='Confirm password' secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText} fontWeight='bold'>
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
