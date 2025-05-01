import {StyleSheet, TouchableOpacity} from 'react-native';
import {themes} from '../../themes';
import {height, width} from '../../constants/screen-dimensions';
import {Add} from 'iconsax-react-nativejs';

const FloatButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Add size={40} color={themes.white} />
    </TouchableOpacity>
  );
};

export default FloatButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: themes.secondColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: 100,
    position: 'absolute',
    bottom: height * 0.05,
    right: width * 0.07,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
