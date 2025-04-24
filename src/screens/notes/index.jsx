import {View, Text, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screen-styles';
import firestore from '@react-native-firebase/firestore';
import {useEffect, useState} from 'react';
import FloatButton from '../../components/float-button';
import NoteCard from '../../components/note-card';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../constants/screen-names';

const Notes = () => {
  const navigation = useNavigation();

  const [notes, setNotes] = useState([]);

  console.log('notes', notes);

  const getNotes = () => {
    firestore()
      .collection('Notes')
      .get()
      .then(querySnapshot => {
        console.log('Total notes:', querySnapshot.size);

        let notes = [];

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'Note ID:',
            documentSnapshot.id,
            'Note Data:',
            documentSnapshot.data(),
          );

          notes.push({
            id: documentSnapshot.id,
            title: documentSnapshot.data().title,
            description: documentSnapshot.data().description,
            time: documentSnapshot.data().time,
          });

          setNotes(notes);
        });
      });
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <View style={screenStyles.container}>
      <FlatList
        data={notes}
        renderItem={({item}) => <NoteCard data={item} />}
      />
      <FloatButton onPress={() => navigation.navigate(screenNames.AddNote)} />
    </View>
  );
};

export default Notes;
