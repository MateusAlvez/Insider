import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { Text } from 'react-native';
import StatusBarPage from '../components/StatusBarPage';

export default function MyLinks(){
 
  return (  
    <LinearGradient
    colors={["#c7ede8", "#45b5c4"]}
    style={{ flex: 1, justifyContent: "center" }}
  >
      <StatusBarPage 
       barStyle= "light-content"  
       backgroundColor = '#c7ede8'   
      /> 

    <Text>Meus links.</Text>

    <></>
  </LinearGradient>

 )

}

 