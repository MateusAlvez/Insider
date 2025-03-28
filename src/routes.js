import { createDrawerNavigator } from '@react-navigation/drawer'; // Corrigido o caminho do pacote
import React from 'react';


import Home from './Home';
import Mylinks from './MyLinks';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function Routes() {
return (
    <Drawer.Navigator
      //Editor do Drawer.
      screenOptions={{
        drawerActiveTintColor: '#45b5c4',
        drawerStyle: {
          width: 240,
        },
        drawerLabelStyle: {
            color: 'black',
            fontSize: 15,
            marginTop: 12,
            textAlign: 'center',
          },
          drawerHideStatusBarOnOpen:{
            slide: true,
           },
           headerStyle:{
            backgroundColor: '#c7ede8',
            elevation: 0,
            
           },
           headerTintColor: '#45b5c4',
           

      }}

    >


      <Drawer.Screen name="Home" 
      component={Home} 
       options={{title: 'Encurtar Link',
        drawerIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'cube' : 'cube-outline'}
              color={color}
              size={size}
            />
        )
       }}
      />
      
      <Drawer.Screen name="Mylinks"
       component={Mylinks}
       options={{title: 'Meus Linkes',
        drawerIcon: ({focused, size, color}) => (
            <Ionicons
              name={focused ? 'stats-chart' : 'stats-chart-outline'}
              color={color}
              size={size}
            />
        )
       }}

        />
    </Drawer.Navigator>
  );
}

export default Routes;



