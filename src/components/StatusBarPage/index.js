import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useIsFocused } from '@react-navigation/native';

function StatusBarPage(props){
    const IsFocused = useIsFocused();
    
    
    return IsFocused ? <StatusBar {...props} /> : null;
        
    


}

export default StatusBarPage;