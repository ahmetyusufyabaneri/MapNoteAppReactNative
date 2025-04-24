import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {themes} from '../../themes';
import {Edit} from 'iconsax-react-nativejs';

const NoteCard = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{data?.title}</Text>
        <TouchableOpacity>
          <Edit size={32} color={themes.fifthColor} />
        </TouchableOpacity>
      </View>
      <Text style={styles.description}>{data?.description}</Text>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{data?.time}</Text>
      </View>
    </View>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.thirdColor,
    paddingHorizontal: 12,
    paddingVertical: 20,
    margin: 8,
    borderRadius: 8,
  },
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  description: {
    fontSize: 15,
    fontWeight: '500',
  },
  timeContainer: {
    alignItems: 'flex-end',
    marginTop: 16,
  },
  time: {
    color: '#4C585B',
    fontSize: 16,
    fontWeight: '700',
  },
});
