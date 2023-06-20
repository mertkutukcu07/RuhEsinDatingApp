import {StyleSheet, View, Text, Platform} from 'react-native';
import React from 'react';
import Starter1 from './Starter1';
import Starter2 from './Starter2';
import Starter3 from './Starter3';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../constans/Colors';
const StarterScreen = ({navigation}) => {
  const slides = [
    {
      key: 'screen1',
      component: <Starter1 />,
    },
    {
      key: 'screen2',
      component: <Starter2 />,
    },
    {
      key: 'screen3',
      component: <Starter3 />,
    },
  ];
  const renderItem = ({item}) => {
    return <View style={styles.slide}>{item.component}</View>;
  };
  const renderNextButton = () => {
    const currentSlide = slides.find(slide => slide.key === 'screen2');
    const buttonBackground = currentSlide
      ? {backgroundColor: Colors.button.black}
      : {};
    const buttonText = currentSlide ? {color: Colors.button.white} : {};

    return (
      <View style={styles.buttonContainer}>
        <View style={[styles.button, buttonBackground]}>
          <Text style={[styles.buttonText, buttonText]}>Ruh eşimi bul!</Text>
        </View>
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Ruh eşimi bul!</Text>
        </View>
      </View>
    );
  };
  const handleDone = () => {
    navigation.navigate('Number');
  };

  return (
    <AppIntroSlider
      renderItem={renderItem}
      data={slides}
      onDone={handleDone}
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      dotStyle={styles.dot}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
    />
  );
};

export default StarterScreen;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
  },
  activeDot: {
    backgroundColor: 'white',
    marginTop: hp('-16%'),
  },
  dot: {
    backgroundColor: '#FFFFFF87',
    marginTop: hp('-16%'),
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: Platform.select({
      ios: hp('10%'),
      android: hp('10%'),
    }),
  },
  button: {
    backgroundColor: Colors.button.white,
    padding: 10,
    borderRadius: 15,
    width: wp('50%'),
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.text.black,
    fontWeight: '600',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
