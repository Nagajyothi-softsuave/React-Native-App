import React, {useRef} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import ActionSheet from 'react-native-actions-sheet';
import SheetHeader from '../SheetHeader';

export default function HomeScreen() {
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
