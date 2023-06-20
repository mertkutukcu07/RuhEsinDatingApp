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
const NumberScreen = ({navigation}) => {
  const [number, setNumber] = useState('');

  const handleContinue = () => {
    navigation.navigate('VerifyPhone', {
      number,
    });
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
          Lütfen telefon numaranızı yazınız.
        </Text>
      </View>
      <View style={styles.inputsC}>
        <Text style={styles.telnotext}>Telefon Numarası</Text>
        <View style={styles.inputs}>
          <TextInput
            placeholder="TR +90"
            style={styles.input}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.telnoinput}
            keyboardType="numeric"
            value={number}
            onChangeText={number => setNumber(number)}
          />
        </View>
        <LinearGradient
          colors={['rgba(238, 120, 34, 1)', 'rgba(238, 120, 34, 0.67)']}
          style={styles.linearGradient}>
          <TouchableOpacity onPress={handleContinue}>
            <Text style={styles.buttonText}>Devam Et</Text>
          </TouchableOpacity>
        </LinearGradient>
        <Text style={styles.infotext}>
          Kullanıcının gerçekten sen olduğunu doğrulamak için lütfen cep
          telefonuna gönderdiğimiz kodu giriniz. Mesajlar ücrete tabi olabilir.
          <Text style={{color: 'orange'}}> numaran değişirse ?</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default NumberScreen;

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
    width: wp('30'),
    textAlign: 'center',
    height: hp('5%'),
    color: Colors.text.black,
    fontSize: 16,
  },
  telnotext: {
    fontSize: 16,
    color: Colors.text.black,
    fontWeight: '600',
  },
  telnoinput: {
    backgroundColor: Colors.input.gray,
    width: wp('55%'),
    textAlign: 'center',
    height: hp('5%'),
    color: Colors.text.black,
    fontSize: 16,
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
});
