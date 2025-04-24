import {Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const FormInput = ({value, placeholder, onChangeText}) => {
  return (
    <Input
      style={styles.input}
      value={value}
      placeholder={placeholder}
      size="large"
      onChangeText={onChangeText}
    />
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    marginVertical: 16,
  },
});
