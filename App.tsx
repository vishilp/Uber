/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-get-random-values';
/* for the google places api*/



import HomeScreen from './src/pages_or_screens/HomeScreen/HomeScreen';
import SearchScreen from './src/pages_or_screens/SearchScreen/SearchScreen';
import OrderScreen from './src/pages_or_screens/OrderScreen/OrderScreen';


function App(): React.JSX.Element {
  return (
    <>
    <OrderScreen/>
    </>
      );
    }

export default App;
