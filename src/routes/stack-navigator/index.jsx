import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../constants/screen-names';
import Notes from '../../screens/notes';
import Profile from '../../screens/profile';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={screenNames.Notes} component={Notes} />
      <Stack.Screen name={screenNames.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
