import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Platform,
} from 'react-native';
import React from 'react';
import Images from '../constans/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../constans/Colors';

const Bottom = () => {
  const BOTTOM_ITEMS = [
    {
      key: 'search',
      icon: Images.ruhEsinImages.search,
    },
    {
      key: 'chat',
      icon: Images.ruhEsinImages.chat,
    },
    {
      key: 'yinyang',
      icon: Images.ruhEsinImages.yinyang,
    },
    {
      key: 'alert',
      icon: Images.ruhEsinImages.alert,
    },
    {
      key: 'person',
      icon: Images.ruhEsinImages.person,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {BOTTOM_ITEMS.map(item => (
        <View style={styles.bottomC} key={item.key}>
          <TouchableOpacity>
            <Image source={item.icon} style={styles.pages} />
          </TouchableOpacity>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default Bottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    top: Platform.select({
      android: hp('40%'),
      ios: hp('38%'),
    }),
  },
  bottomC: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    borderTopWidth: 1,
    borderColor: Colors.input.gray,
  },
  pages: {
    top: Platform.select({
      android: hp('1%'),
      ios: hp('3%'),
    }),
  },
});
