import React, {useRef} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';
import SheetHeader from './SheetHeader';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Sheet() {
  const actionSheetRef = useRef(null);

  const openSheet = () => {
    actionSheetRef.current?.show();
  };
  const handleOnCancel = () => {
    actionSheetRef.current?.hide();
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: 'bold',margin:5}}>
        Welcome to Our App!
      </Text>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
      <ActionSheet ref={actionSheetRef}>
        <View style={styles.sheetContent}>
       <SheetHeader title='Action Sheet' onPress={handleOnCancel} />
          <Text style={styles.sheetText}>This is a custom action sheet!</Text>
          <Button title="Close" onPress={handleOnCancel} />
        </View>
      </ActionSheet>
    </View>
  );
}

export const styles = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
    padding: hp(10),
    justifyContent:'center',
    alignItems:'center'
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'blue',
    padding:10,
    margin:10
  },
  buttonText: {
    color: '#ffffff',
    fontSize:16,
    fontWeight:'bold'
  },
  sheetContent: {
    padding: 20,
    alignItems: 'center',
  },
  sheetText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    marginTop:15,
    fontFamily:'Times New Roman'
  },
};