import {View} from 'react-native';
import {screenStyles} from '../../styles/screen-styles';
import {useState} from 'react';
import FormInput from '../../components/form-input';
import FormButton from '../../components/form-button';

const AddNote = () => {
  const [value, setValue] = useState('');

  return (
    <View style={screenStyles.container}>
      <FormInput value={value} placeholder="Note Title" />
      <FormInput value={value} placeholder="Note Description" />
      <FormInput value={value} placeholder="Created Time" />
      <FormInput value={value} placeholder="Created Date" />
      <FormButton title="Save" />
    </View>
  );
};

export default AddNote;
