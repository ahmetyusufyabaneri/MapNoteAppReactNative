import {StyleSheet, View} from 'react-native';
import {screenStyles} from '../../styles/screen-styles';
import {Button, Input} from '@ui-kitten/components';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';
import {AddNoteSchema} from '../../utils/validations';
import CustomModal from '../../components/custom-modal';
import {useState} from 'react';

const AddNote = () => {
  const [visible, setVisible] = useState(false);

  const addNote = values => {
    firestore()
      .collection('Notes')
      .add(values)
      .then(() => {
        setVisible(true);
      });
  };

  return (
    <View style={screenStyles.container}>
      <CustomModal visible={visible} closeModal={() => setVisible(false)} />
      <Formik
        initialValues={{
          title: '',
          description: '',
          time: '',
          date: '',
        }}
        validationSchema={AddNoteSchema}
        onSubmit={values => addNote(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <View style={{flex: 1}}>
            <Input
              style={styles.input}
              value={values.title}
              size="large"
              placeholder="Note Title"
              label="Title"
              onChangeText={handleChange('title')}
              caption={errors.title}
              status={errors.title ? 'danger' : 'basic'}
            />
            <Input
              style={styles.input}
              value={values.description}
              size="large"
              placeholder="Note Description"
              label="Description"
              onChangeText={handleChange('description')}
              caption={errors.description}
              status={errors.description ? 'danger' : 'basic'}
            />
            <Input
              style={styles.input}
              value={values.time}
              size="large"
              placeholder="Created Time"
              label="Time"
              onChangeText={handleChange('time')}
              caption={errors.time}
              status={errors.time ? 'danger' : 'basic'}
            />
            <Input
              style={styles.input}
              value={values.date}
              size="large"
              placeholder="Created Date"
              label="Date"
              onChangeText={handleChange('date')}
              caption={errors.date}
              status={errors.date ? 'danger' : 'basic'}
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
  input: {
    marginVertical: 16,
  },
  button: {
    position: 'absolute',
    bottom: 60,
    right: 12,
    left: 12,
  },
});
