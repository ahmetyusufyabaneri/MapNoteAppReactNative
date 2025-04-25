import {StyleSheet, View} from 'react-native';
import {screenStyles} from '../../styles/screen-styles';
import FormInput from '../../components/form-input';
import {Button} from '@ui-kitten/components';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';
import {AddNoteSchema} from '../../utils/validations';

const AddNote = () => {
  const addNote = values => {
    firestore()
      .collection('Notes')
      .add(values)
      .then(() => console.log('Note added!'));
  };

  return (
    <View style={screenStyles.container}>
      <Formik
        initialValues={{
          title: '',
          description: '',
          time: '',
          date: '',
        }}
        validationSchema={AddNoteSchema}
        onSubmit={values => addNote(values)}>
        {({handleChange, handleSubmit, values}) => (
          <View style={{flex: 1}}>
            <FormInput
              value={values.title}
              placeholder="Note Title"
              label="Title"
              onChangeText={handleChange('title')}
            />
            <FormInput
              value={values.description}
              placeholder="Note Description"
              label="Description"
              onChangeText={handleChange('description')}
            />
            <FormInput
              value={values.time}
              placeholder="Created Time"
              label="Time"
              onChangeText={handleChange('time')}
            />
            <FormInput
              value={values.date}
              placeholder="Created Date"
              label="Date"
              onChangeText={handleChange('date')}
            />
            <Button onPress={handleSubmit} style={styles.button} size="large">
              Save
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddNote;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 60,
    right: 12,
    left: 12,
  },
});
