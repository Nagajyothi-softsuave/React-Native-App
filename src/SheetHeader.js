import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { closeIcon } from './images';

const SheetHeader = ({title, hideClose = false, style,onPress}) => {
  return (
    <View style={[styles.modalHeader, style]}>
      <Text style={[styles.modalTitle]}>{title}</Text>
      {!hideClose && (
          <TouchableOpacity
            onPress={onPress}
            style={styles.closeIconContainer}>
            <Image source={closeIcon} style={styles.icon} />
          </TouchableOpacity>
      )}
    </View>
  );
};

export default SheetHeader;

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%'
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
  },
  closeIconContainer:{
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: hp(1),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: wp(8),
    height: wp(8),
    borderRadius: wp(25),
  },
  icon: {
    width: wp(8),
    height: wp(8),
    marginRight: wp(2.5),
    borderRadius:25,
  },
});
