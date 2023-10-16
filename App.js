import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import SignupScreen from './screens/SignupScreen';
import ChangePassScreen from './screens/ChangePassScreen';
import StoryScreen from './screens/StoryScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main"
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ChangePassword" component={ChangePassScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
