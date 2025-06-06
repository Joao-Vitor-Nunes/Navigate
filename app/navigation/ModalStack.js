import { NavigationContainer } from '@react-navigation/native';
import ModalStack from './navigation/ModalStack';

export default function Layout() {
  return (
    <NavigationContainer>
      <ModalStack />
    </NavigationContainer>
  );
}
