import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Images from '../../constans/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constans/Colors';
import LinearGradient from 'react-native-linear-gradient';
const VerifyPhoneNumberScreen = ({navigation, route}) => {
  const {number} = route.params;
  console.log(number);

  const gotoHome = () => {
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backC}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.ruhEsinImages.backBtn} />
        </TouchableOpacity>
      </View>
      <View style={styles.HeaderC}>
        <Image source={Images.ruhEsinImages.info} />
        <Text style={styles.pleasenumbertext}>
          Lütfen telefonunuza gelen kodu giriniz.
        </Text>
      </View>
      <View style={styles.inputsC}>
        <View style={styles.phoneandrefreshCodeC}>
          <Text style={styles.telnotext}>{number}</Text>
          <TouchableOpacity>
            <Text>Tekrar Gönder</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
          <TextInput style={styles.input} keyboardType="numeric" />
        </View>
        <LinearGradient
          colors={['rgba(238, 120, 34, 1)', 'rgba(238, 120, 34, 0.67)']}
          style={styles.linearGradient}>
          <TouchableOpacity onPress={gotoHome}>
            <Text style={styles.buttonText}>Devam Et</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
};

export default VerifyPhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backC: {
    marginVertical: hp('5%'),
    marginHorizontal: wp('5%'),
  },
  HeaderC: {
    flexDirection: 'row',
    gap: wp('2%'),
    marginHorizontal: wp('6%'),
    alignItems: 'center',
  },
  pleasenumbertext: {
    fontWeight: '600',
    fontSize: 14,
    color: Colors.text.black,
  },
  inputsC: {
    marginHorizontal: wp('6%'),
    marginVertical: hp('5%'),
  },
  inputs: {
    marginTop: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp('5%'),
  },
  input: {
    backgroundColor: Colors.input.gray,
    width: wp('10.7'),
    textAlign: 'center',
    height: hp('6%'),
    color: Colors.text.black,
    fontSize: 16,
  },
  telnotext: {
    fontSize: 16,
    color: Colors.text.black,
    fontWeight: '600',
  },
  linearGradient: {
    padding: hp('0.7%'),
    marginTop: hp('3%'),
    width: wp('90%'),
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  infotext: {
    textAlign: 'center',
    fontSize: 14,
    marginTop: hp('3%'),
  },
  phoneandrefreshCodeC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
