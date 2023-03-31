import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'utils/Responsive';
import {FontFamily, FontSize} from 'constants/fonts';
import {Colors} from 'colors/Colors';
export default StyleSheet.create({
  container: {
    // backgroundColor: Colors.lightBlue,
    // height: '100%',
    // width: '100%',
    flex: 1,
  },
  textInputContainer: {
    width: '90%',
    backgroundColor: Colors.darkTransparentColor,
    marginVertical: hp(4),
    paddingVertical: hp(4),
    marginLeft: wp(5),
    borderRadius: 5,
    paddingHorizontal: wp(3),
  },
  textinputView: {
    height: hp(7),
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 5,
    flexDirection: 'row',
    marginVertical: hp(3),
  },
  iconView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: wp(5),
  },
  textinput: {
    width: '80%',
    height: '100%',
    backgroundColor: Colors.white,
    paddingLeft: wp(5),
  },
  passwordView: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginView: {
    height: hp(7),
    backgroundColor: Colors.lightBlue,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: 1,
    justifyContent: 'center',
  },
  loginText: {
    color: Colors.white,
    fontFamily: FontFamily.RobotoBold,
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    color: Colors.skyColor,
    fontSize: 18,
    marginTop: hp(2),
    fontWeight: '200',
  },
  bioMetricView: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    backgroundColor: Colors.lightBlue,
    marginHorizontal: wp(10),
    borderRadius: 5,
    borderColor: Colors.white,
    borderWidth: 1,
  },
  bioMetricText: {
    textAlign: 'center',
    color: Colors.white,
    fontSize: FontSize.h16,
    paddingTop: hp(0.5),
    paddingLeft: wp(15),
  },
  backgroundVideo: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },
  rememberText: {
    marginHorizontal: wp(1),
    color: Colors.white,
    fontFamily: FontFamily.RobotoBold,
  },
  signInContainerStyle: {
    flexDirection: 'row',
    paddingVertical: hp(1),
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingHorizontal: wp(4),
    borderBottomColor: Colors.lightGray2,
  },
  modalContainer: {
    backgroundColor: Colors.white,
    alignSelf: 'center',
    borderRadius: 8,
    width: '80%',
    paddingVertical: hp(1),
  },
  signInTextStyle: {
    fontFamily: FontFamily.RobotoRegular,
    fontSize: FontSize.h14,
  },
  confirmTextStyle: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    fontFamily: FontFamily.RobotoRegular,
    fontSize: FontSize.h14,
  },
  imageSensorStyle: {
    paddingHorizontal: wp(4),
    paddingTop: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  },
  imageContainer: {
    height: 40,
    width: 40,
    backgroundColor: Colors.darkBlue,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchSensorText: {
    paddingLeft: wp(3),
    fontFamily: FontFamily.RobotoRegular,
    fontSize: FontSize.h14,
  },
  cancelButton: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: FontSize.h14,
    paddingRight: wp(4),
    paddingBottom: wp(2),
  },
  imageStyle: {
    height: 25,
    width: 25,
  },
  cancelButtonContainer: {alignItems: 'flex-end'},
  copyRightStyle:{
    color: Colors.white,
    textAlign: 'center',
    fontFamily: FontFamily.RobotoMedium,
    fontSize: FontSize.h11,
  },
  copyRightContainer:{
    backgroundColor: Colors.lightBlue,
  }
});
