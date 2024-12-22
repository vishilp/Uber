/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import 'react-native-get-random-values';
/* for the google places api*/



import HomeScreen from './src/pages_or_screens/HomeScreen/HomeScreen';
import SearchScreen from './src/pages_or_screens/SearchScreen/SearchScreen';
import OrderScreen from './src/pages_or_screens/OrderScreen/OrderScreen';


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

    <SearchScreen/>
    </>
      );
    }

export default App;
