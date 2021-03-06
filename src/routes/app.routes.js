import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabs from './home.routes';
import DetailsScreen from '../pages/Details';
import ShareButton from '~/components/shareButton';
import Colors from '../styles/colors';
import SearchContainer from '~/components/searchContainer';

const Stack = createStackNavigator();

const isFavorite = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  return routeName === 'Favoritos';
};

const InitialRoute = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="HomeTabs"
      component={HomeTabs}
      options={({route}) =>
        isFavorite(route)
          ? {
              title: '',
              headerStyle: {
                backgroundColor: Colors.background,
              },
              headerRight: () => <ShareButton />,
            }
          : {
              header: () => <SearchContainer />,
              cardStyle: {backgroundColor: Colors.background},
            }
      }
    />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        title: '',
        headerStyle: {
          backgroundColor: Colors.background,
        },
        headerTintColor: Colors.icons,
      }}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <InitialRoute />
    </NavigationContainer>
  );
}
