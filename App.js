import { StyleSheet, Text, View } from 'react-native';
import BagList from './Comonents/BagList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BagDetails from './Comonents/BagDetails';
import Userslists from './Comonents/Users';
import Deals from './Comonents/Deals';
import DealDetails from './Comonents/DealDetails';

export default function App() {
const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  function BagStack() {
    return (
      <Stack.Navigator >
        <Stack.Screen name="BagList" component={BagList} />
         <Stack.Screen name="BagDetails" component={BagDetails} />
      </Stack.Navigator>
    );
  }
  function DealsStack(){
      return (
        <Stack.Navigator >
          <Stack.Screen name="DealsList" component={Deals} />
           <Stack.Screen name="DealDetails" component={DealDetails} />
        </Stack.Navigator>
      );
  }
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Bags" component={BagStack} />
        <Tab.Screen name="Users" component={Userslists} />
        <Tab.Screen name="Deals" component={DealsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
