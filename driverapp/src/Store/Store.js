import React, { useState, createContext, useEffect } from 'react';
import { View, Text } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import * as Url from '../Utils/Urls';

export const MyContext = createContext();

export const MyProvider = props => {
  const [token, setToken] = useState({});
  const [companyId, setCompanyId] = useState('');

  useEffect(() => {
    // getProject();
    // getData();
  }, []);
  return (
    <MyContext.Provider
      value={{
        companyId: [companyId, setCompanyId],
      }}
      
      >
      {props.children}
    </MyContext.Provider>
  );
};
