import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PointsTracker from './pointsTracker';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {routes, screens} from './appConstants';

const PointTrackerStack = createNativeStackNavigator();

const navigatorScreenOptions = {
  headerBackTitleVisible: false,
  headerBackVisible: false,
};

function PointerTracker(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PointTrackerStack.Navigator screenOptions={navigatorScreenOptions}>
          <PointTrackerStack.Screen
            name={routes.POINT_TRACKER}
            component={PointsTracker}
            options={{title: screens.POINT_TRACKER}}
          />
        </PointTrackerStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default PointerTracker;
