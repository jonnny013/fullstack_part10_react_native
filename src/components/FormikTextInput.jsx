import {StyleSheet} from 'react-native';
import {useField} from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.errorColor,
  },
  input: {
    fontSize: 18,
    margin: 8,
    borderWidth: 1,
    borderRadius: 4,
    width: '90%',
    height: 45,
    padding: 10,
  },
});

const FormikTextInput = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[styles.input, {borderColor: showError ? theme.colors.errorColor : 'black'}]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
