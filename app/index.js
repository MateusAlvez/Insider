import React from "react";
import { StyleSheet } from "react-native";
import 'react-native-gesture-handler';

import Routes from '../src/routes';



export default function App() {
    return (
    
        <Routes/>
   
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
    },


})