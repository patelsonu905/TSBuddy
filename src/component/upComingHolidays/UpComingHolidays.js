import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'utils/Responsive';
import {MonthImages} from 'assets/monthImage/MonthImage';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import {Colors} from 'colors/Colors';
const UpComingHolidays = () => {
  const holidaysData = useSelector(state => state.dataReducer.holidayData);

  return (
    <View>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Upcoming Holidays
        </Text>
      </View>
      <FlatList
        data={holidaysData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={{marginRight: wp(1)}}
      />
    </View>
  );
};
const renderItem = ({item}) => {
  const newDateFormate = moment(item.holidayDate).format(`DD MMM YYYY`);
  return (
    <View style={styles.imageView}>
      {/* {item.holidayData <= '30 Mar 2023' ? <Text></Text> : null} */}
      <Image
        resizeMode="contain"
        source={
          item.description === 'Republic Day'
            ? MonthImages.republicDay
            : item.description === 'Holi'
            ? MonthImages.holi
            : item.description === 'Independence Day'
            ? MonthImages.independenceDay
            : item.description === 'Diwali'
            ? MonthImages.diwali
            : item.description === 'Dussehra'
            ? MonthImages.diwali
            : item.description === "Mahatma Gandhi's Birthday"
            ? MonthImages.gandhiJayantiS
            : MonthImages.gandhiJayantiS
        }
        style={{height: 40, width: 40, marginTop: hp(1.8), flex: 1}}
      />
      <Text style={{marginTop: hp(2.4), flex: 5, marginLeft: wp(1)}}>
        {item.description}
      </Text>
      <View style={{flex: 3}}>
        <View style={styles.textView}>
          <TouchableOpacity>
            <Text
              style={{fontSize: 16, fontWeight: 'bold', color: Colors.white}}>
              {newDateFormate}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1),
    paddingHorizontal: wp(3),
    backgroundColor: Colors.skyColor,
    marginTop: hp(1),
  },
  imageView: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: Colors.white,
    marginTop: hp(0.6),
    shadowOpacity: 0.1,
    paddingLeft: wp(1),
  },
  textView: {
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(5),
    backgroundColor: Colors.pink,
    width: wp(40),
    borderRadius: 5,
    marginVertical: hp(0.5),
    backgroundColor: Colors.darkGreen,
  },
});
export default UpComingHolidays;
