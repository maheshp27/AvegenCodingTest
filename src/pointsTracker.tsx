import React from 'react';
import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {win, loose} from './redux/actions/pointAction';
import {LOOSE, POINTS_MESSAGE, WIN, routes} from './appConstants';

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsText: {
    fontSize: 20,
    fontWeight: '500',
  },
});

export default function PointsTracker({navigation}: any) {
  const dispatch = useDispatch();
  const points = useSelector((store: any) => store.points.points);

  const onWinClick = () => {
    dispatch(win());
    navigation.push(routes.POINT_TRACKER);
  };

  const onLooseClick = () => {
    dispatch(loose());
    // Reason: Can not go back when no stacks are available
    if (navigation.canGoBack()) {
      navigation.pop();
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.pointsText}>
        {POINTS_MESSAGE} {points}
      </Text>
      <Button
        title={WIN}
        color={'#00FF00'}
        onPress={() => {
          onWinClick();
        }}
      />
      <Button
        title={LOOSE}
        color={'#FF0000'}
        onPress={() => {
          onLooseClick();
        }}
      />
    </ScrollView>
  );
}
