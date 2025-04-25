import {Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';

const FormInput = ({value, placeholder, label, onChangeText}) => {
  return (
    <Input
      style={styles.input}
      value={value}
      placeholder={placeholder}
      label={label}
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
