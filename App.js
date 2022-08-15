import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CardView from './screens/card';
import SampleImages from './screens/images';
import Countries from './screens/countries';
import MemberView from './screens/members';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




//create activity function here
function FirstActivity(){
  return (
    <View>
      <SampleImages/>
    </View>
  );
}

function SecondActivity(){
  return (
    <SafeAreaView>
      <Countries/>
    </SafeAreaView>
  );
}

function ThirdActivity(){
  return (
    <SafeAreaView>
      <CardView/>
    </SafeAreaView>
  );
}

function FourthActivity(){
  return (
    <SafeAreaView>
      <MemberView/>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();
function BottomNav(){
  return(
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#004ecb',
      }}
    >
        <Tab.Screen name="Images" component={FirstActivity} 
          options={{
            tabBarLabel: 'Images',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="image" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen name="Country" component={SecondActivity} 
          options={{
            tabBarLabel: 'Country',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="map" size={size} color={color} />
            ),
          }} 
        />

        <Tab.Screen name="Flags" component={ThirdActivity} 
          options={{
            tabBarLabel: 'Flags',
            tabBarIcon: ({ color, size }) => (
              <Icon name="flag" size={size} color={color} />
            ),
          }} 
        />

        <Tab.Screen name="Profiles" component={FourthActivity} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" size={size} color={color} />
            ),
          }}
        />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  );
};

export default App;
