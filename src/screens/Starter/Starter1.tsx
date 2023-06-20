import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import Images from '../../constans/Images';
import RuhEsinLogoComp from '../../components/RuhEsinLogoComp';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constans/Colors';
import LinearGradientBG from '../../components/LinearGradientBG';

const Starter1 = () => {
  return (
    <LinearGradientBG style={styles.container}>
      <RuhEsinLogoComp />
      <View style={styles.bodyC}>
        <Image source={Images.ruhEsinImages.body} style={styles.bodyImage} />
        <View style={styles.textC}>
          <Text style={styles.text}>Birbirinizi Tamamlamanızı</Text>
          <Text style={styles.textItalic}>Sağlayacak %100</Text>
          <Text style={styles.text}>Oranında Eşleşmeler </Text>
        </View>
      </View>
    </LinearGradientBG>
  );
};

export default Starter1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bodyC: {
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('15%'),
  },
  bodyImage: {
    width: wp('91'),
    height: hp('50'),
  },
  textC: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '400',
    fontSize: 20,
    color: Colors.text.white,
    paddingVertical: hp('0.5%'),
  },
  textItalic: {
    fontWeight: '700',
    fontSize: 25,
    color: Colors.text.white,
    fontStyle: 'italic',
  },
});
