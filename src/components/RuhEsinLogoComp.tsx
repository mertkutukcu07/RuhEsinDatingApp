import {StyleSheet, Image, View, Platform} from 'react-native';
import React from 'react';
import Images from '../constans/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const RuhEsinLogoComp = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.ruhEsinImages.redLove} style={styles.loveLogo} />
      <Image source={Images.ruhEsinImages.ruhesinlogo} />
    </View>
  );
};

export default RuhEsinLogoComp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.select({
      ios: hp('14.5%'),
      android: hp('14.5%'),
    }),
  },
  loveLogo: {
    left: Platform.select({
      ios: hp('5.4%'),
      android: hp('5.3%'),
    }),
    top: hp('1%'),
  },
});
