import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React from 'react';
import Images from '../constans/Images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerC}>
        <View>
          <Image
            source={Images.ruhEsinImages.redLove}
            style={styles.heartImage}
          />
          <Image source={Images.ruhEsinImages.ilisievreni} />
        </View>
        <TouchableOpacity>
          <Image source={Images.ruhEsinImages.list} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('8%'),
    top: hp('7%'),
  },
  heartImage: {
    right: Platform.select({
      ios: wp('1%'),
      android: wp('1%'),
    }),
    top: Platform.select({
      ios: wp('1%'),
      android: wp('1%'),
    }),
  },
});
