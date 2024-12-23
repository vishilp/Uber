/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';

import React, { useEffect, useState} from 'react';
import { PermissionsAndroid } from 'react-native';
import 'react-native-get-random-values';
/* for the google places api*/
import Geolocation from 'react-native-geolocation-service';

import Router from './src/navigation/root';

function App(): React.JSX.Element {

  {/*req permission for user location using useEffect (runs once automatically)*/}


  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Uber Location Permission',
          message:
            'Uber App needs access to your current location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can now use your current location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }

  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <>
      <Router/>
    </>
      );
    }

export default App;
