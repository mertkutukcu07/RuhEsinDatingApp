import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../constans/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LinearGradientBG = ({children}) => {
  return (
    <LinearGradient
      colors={['rgba(238, 120, 34, 0.67)', 'rgba(238, 120, 34, 1)']}
      locations={[0, 0.67]}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
  },
});

export default LinearGradientBG;
