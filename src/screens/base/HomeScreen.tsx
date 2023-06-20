import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import data from '../../constans/data/data';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Images from '../../constans/Images';
import Colors from '../../constans/Colors';

const HomeScreen = () => {
  const [currentIndex, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(0);

  const nextModal = () => {
    switch (modalType) {
      case 0:
        setModalType(1);
        break;
      case 1:
        setModalType(2);
        break;
      case 2:
        setModalType(3);
        break;
      case 3:
        setModalType(4);
        break;
      case 4:
        setModalVisible(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardC}>
        <Image source={item.image} style={styles.cardİmage} />
        <View style={styles.infoC}>
          <View style={styles.nameandageC}>
            <Text style={styles.nameagetext}>{item.name},</Text>
            <Text style={styles.nameagetext}>{item.age}</Text>

            <TouchableOpacity>
              <Image source={Images.ruhEsinImages.heart} />
            </TouchableOpacity>
          </View>
          <View style={styles.locationC}>
            <Image source={Images.ruhEsinImages.location} />
            <Text style={styles.locationtext}>
              {item.location} Km Uzaklıkta{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.centeredView}>
        <Carousel
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={renderItem}
          sliderWidth={wp('80%')}
          itemWidth={hp('80%')}
          layout={'tinder'}
          onSnapToItem={index => setIndex(index)}
          layoutCardOffset={20}
        />
        <Pagination
          dotsLength={data.length}
          activeDotIndex={currentIndex}
          containerStyle={styles.dotCont}
          dotStyle={styles.dot}
          inactiveDotStyle={{}}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
      <View style={styles.buttonsC}>
        <TouchableOpacity style={styles.refreshC}>
          <Image source={Images.ruhEsinImages.refresh} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.flashC}>
          <Image source={Images.ruhEsinImages.flash} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.heartC}>
          <Image source={Images.ruhEsinImages.heartbottom} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Bottom />
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <TouchableWithoutFeedback onPress={nextModal}>
          <View style={styles.modalContainer}>
            {modalType == 0 ? (
              <View style={styles.modalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={Images.ruhEsinImages.closemodal}
                    style={styles.closeImage}
                  />
                </TouchableOpacity>
                <View style={styles.modal1}>
                  <View>
                    <Image source={Images.ruhEsinImages.lefthand} />
                    <Text style={styles.modal1text}>Geçmek için ?</Text>
                    <Text style={styles.modal1text}>Sola Kaydır</Text>
                  </View>
                  <Image source={Images.ruhEsinImages.border} />
                  <View>
                    <Image source={Images.ruhEsinImages.righthand} />
                    <Text style={styles.modal1text}>Beğenmek için ?</Text>
                    <Text style={styles.modal1text}>Sağa Kaydır</Text>
                  </View>
                </View>
              </View>
            ) : modalType == 1 ? (
              <View style={styles.anotherModalContent}>
                <View style={styles.modal2}>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Text style={styles.modal1text}>Tanıtım turunu bitir</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Image
                      source={Images.ruhEsinImages.closemodal}
                      style={styles.closeImage2}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.modal2contextC}>
                  <Image source={Images.ruhEsinImages.whiteheart} />
                  <Image source={Images.ruhEsinImages.selectheart} />
                  <Text style={styles.modal2text}>
                    Kalbe tıklayarak takip edebilirsin.
                  </Text>
                </View>
              </View>
            ) : modalType == 2 ? (
              <View style={styles.anotherModalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={Images.ruhEsinImages.closemodal}
                    style={styles.modal3close}
                  />
                </TouchableOpacity>
                <View style={styles.modal3C}>
                  <Text style={styles.modal3text}>
                    Buradan Beğeni Gönderebilirsin
                  </Text>
                  <Image source={Images.ruhEsinImages.selectbutton} />
                  <View style={styles.heartC}>
                    <Image source={Images.ruhEsinImages.heartbottom} />
                  </View>
                </View>
              </View>
            ) : modalType == 3 ? (
              <View style={styles.anotherModalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={Images.ruhEsinImages.closemodal}
                    style={styles.modal3close}
                  />
                </TouchableOpacity>
                <View style={styles.modal4C}>
                  <Text style={styles.modal3text}>
                    Buradan Beğeni Gönderebilirsin
                  </Text>
                  <Image source={Images.ruhEsinImages.selectbutton} />
                  <View style={styles.flashC}>
                    <Image source={Images.ruhEsinImages.flash} />
                  </View>
                </View>
              </View>
            ) : modalType == 4 ? (
              <View style={styles.anotherModalContent}>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Image
                    source={Images.ruhEsinImages.closemodal}
                    style={styles.modal5close}
                  />
                </TouchableOpacity>
                <View style={styles.modal5C}>
                  <Text style={styles.modal3text}>
                    Buradan Sayfayı Yenileyebilirsin
                  </Text>
                  <Image source={Images.ruhEsinImages.selectbutton} />
                  <View style={styles.refreshC}>
                    <Image source={Images.ruhEsinImages.refresh} />
                  </View>
                </View>
              </View>
            ) : null}
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
  },
  bottomContainer: {
    flex: 1,

    bottom: hp('35.8%'),
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('2%'),
  },

  cardİmage: {
    resizeMode: 'contain',
    borderTopRightRadius: 35,
  },
  infoC: {
    position: 'absolute',
    left: wp('1%'),
  },
  nameandageC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('49%'),
    left: wp('2.5%'),
    gap: wp('2%'),
  },
  nameagetext: {
    fontSize: 25,
    fontWeight: '700',
    color: Colors.text.white,
  },
  locationC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: hp('50%'),
  },
  locationtext: {
    color: Colors.text.white,
    fontSize: 15,
    fontWeight: '500',
  },
  dotCont: {},
  dot: {
    width: 35,
    height: 8,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: Colors.LinearGradient.linearGradient1,
  },
  buttonsC: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: hp('1%'),
    gap: wp('2%'),
  },
  refreshC: {
    backgroundColor: Colors.bottombuttons.orange,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  flashC: {
    backgroundColor: Colors.bottombuttons.orange,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  heartC: {
    backgroundColor: Colors.bottombuttons.red,
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
  },
  modalContainer: {
    height: hp('90%'),
    alignItems: 'center',
    backgroundColor: 'rgba(238, 120, 34, 0.4)',
  },
  closeImage: {
    top: hp('16%'),
    left: wp('59%'),
  },
  modal1: {
    flexDirection: 'row',
    top: hp('45%'),
    gap: wp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal1text: {
    color: Colors.text.white,
    fontSize: 18,
  },
  modal2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: hp('17%'),
    gap: wp('25%'),
  },
  modal2contextC: {
    top: Platform.select({
      android: wp('121.8'),
      ios: wp('125.3'),
    }),
    left: Platform.select({
      android: wp('28.6'),
      ios: wp('31.5'),
    }),
  },
  modal2text: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: '700',
    width: wp('39%'),
    textAlign: 'left',
    marginTop: hp('1'),
    right: wp('10%'),
  },
  modal3close: {
    top: hp('16%'),
    left: wp('44%'),
  },
  modal3C: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.select({
      android: hp('64.2%'),
      ios: hp('66.2%'),
    }),
    left: Platform.select({
      android: hp('7.2%'),
      ios: hp('7.2%'),
    }),
  },
  modal3text: {
    color: Colors.text.white,
    fontSize: 18,
    fontWeight: '700',
    width: wp('39%'),
    textAlign: 'center',
  },
  modal4C: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.select({
      android: hp('64.2%'),
      ios: hp('66.2%'),
    }),
    left: Platform.select({
      android: hp('0%'),
      ios: hp('0'),
    }),
  },
  modal5close: {
    top: hp('16%'),
    left: wp('43%'),
  },
  modal5C: {
    justifyContent: 'center',
    alignItems: 'center',
    top: Platform.select({
      android: hp('64.2%'),
      ios: hp('66.2%'),
    }),
    right: Platform.select({
      android: hp('7.3%'),
      ios: hp('7.3'),
    }),
  },
});
