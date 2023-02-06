import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import {MonthImages} from 'assets/monthImage/MonthImage';
import Modal from 'react-native-modal';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'utils/Responsive';
import {modalStatus} from 'redux/dataSlice';
import Ripple from 'react-native-material-ripple';
const SelectDateModal = ({modalData}) => {
  const {openModal, setOpenModal} = modalData;
  const [select, setSelected] = useState(false);
  const [secondSleceted, setSecondSlected] = useState(false);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      closeOnClick={true}
      visible={openModal}
      backdropOpacity={0.3}
      onBackdropPress={() => {
        // dispatch(modalStatus(false));
        setOpenModal(false);
      }}
      onBackButtonPress={() => {
        // dispatch(modalStatus(false));
        setOpenModal(false);
      }}>
      <View
        style={{
          backgroundColor: 'green',
          marginHorizontal: wp(6),
          justifyContent: 'center',
          borderRadius: 10,
          shadowOpacity: 0.2,
          paddingVertical: hp(2),
        }}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingHorizontal: wp(5),
            paddingVertical: hp(1.5),
          }}>
          Select Start Date
        </Text>
        <View
          style={{
            paddingVertical: hp(1),
            backgroundColor: 'white',
            paddingHorizontal: wp(4),
          }}>
          <View
            style={{
              paddingVertical: hp(1),
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingHorizontal: wp(4),
            }}>
            <Ripple
              rippleColor={'red'}
              rippleOpacity={0.5}
              rippleDuration={400}
              rippleSize={500}
              rippleCentered={true}
              rippleContainerBorderRadius={20}
              onPress={() => {
                setSelected(true);
                setSecondSlected(false);
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: select ? 'red' : 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {select ? (
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 10,
                      width: 10,
                      borderRadius: 10,
                    }}></View>
                ) : null}
              </View>
            </Ripple>

            <Text style={{margin: wp(1)}}>1-February-2023</Text>
          </View>
          <View
            style={{
              paddingVertical: hp(1),
              backgroundColor: 'white',
              flexDirection: 'row',
              paddingHorizontal: wp(4),
            }}>
            <Ripple
              onPress={() => {
                setSecondSlected(true);
                setSelected(false);
              }}>
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: secondSleceted ? 'red' : 'gray',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {secondSleceted ? (
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 10,
                      width: 10,
                      borderRadius: 10,
                    }}></View>
                ) : null}
              </View>
            </Ripple>

            <Text style={{margin: wp(1)}}>16-February-2023</Text>
          </View>
          <Text style={{color: 'gray', fontSize: 13}}>
            **Monthly lunch can only be started from 1st or 16th of any month
          </Text>
        </View>
        <View
          style={{
            paddingTop: hp(1),
            borderRadius: 5,
            shadowOpacity: 0.4,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <TouchableWithoutFeedback
            onPress={() => {
              setOpenModal(false);
            }}>
            <View
              style={{
                paddingVertical: hp(1),
                paddingHorizontal: wp(8),
              }}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
                OK
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </Modal>
  );
};
export default SelectDateModal;
