import { View } from 'react-native'
import Text from '../Text'
import FormikTextInput from '../FormikTextInput'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const SignIn = ({onSubmit}) => {
  
  return (
    <View>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' />
      <Pressable onPress={onSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
}

export default SignIn