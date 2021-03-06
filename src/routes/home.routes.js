import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../pages/Home';
import FavoriteScreen from '../pages/Favorite';

import Colors from '~/styles/colors';

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => (
  <Tab.Navigator initialRouteName="Home" activeColor={Colors.icons} shifting>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarColor: Colors.homeTab,
        tabBarIcon: () => (
          <Ionicons name="ios-home" color={Colors.icons} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Favoritos"
      component={FavoriteScreen}
      options={{
        tabBarColor: Colors.favoriteTab,
        tabBarIcon: () => (
          <Ionicons name="ios-star" color={Colors.icons} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeTabs;
