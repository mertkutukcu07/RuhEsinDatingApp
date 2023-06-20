import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import Images from '../../constans/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RuhEsinLogoComp from '../../components/RuhEsinLogoComp';
const Starter3 = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={Images.ruhEsinImages.slideBG}
        style={styles.backgroundimage}>
        <View style={styles.logoComp}>
          <RuhEsinLogoComp />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Starter3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    height: hp('100%'),
  },
  logoComp: {
    bottom: hp('45.4%'),
  },
});
