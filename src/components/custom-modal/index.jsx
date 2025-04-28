import {StyleSheet, Text, View, Modal} from 'react-native';
import {TickCircle} from 'iconsax-react-nativejs';
import {themes} from '../../themes';
import {Button} from '@ui-kitten/components';
import {height, width} from '../../constants/screen-dimensions';

const CustomModal = ({visible, closeModal}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.screenContainer}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <TickCircle size={96} color={themes.green} variant="Bold" />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.situationText}>Successful!</Text>
            <Text style={styles.description}>New note added.</Text>
          </View>
          <Button onPress={() => closeModal()} size="large">
            OK
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  container: {
    backgroundColor: themes.white,
    position: 'absolute',
    right: width * 0.1,
    left: width * 0.1,
    top: height * 0.28,
    bottom: height * 0.28,
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
  },
  textContainer: {
    gap: 8,
    alignItems: 'center',
  },
  situationText: {
    fontSize: 24,
    fontWeight: '700',
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
});
