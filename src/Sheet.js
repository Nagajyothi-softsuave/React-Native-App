import React, {useRef} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import SheetHeader from './SheetHeader';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Sheet({
  title = 'Provide Sheet Title',
  containerStyle = {},
  showCloseIcon = true,
  backdropStyle = {},
  visible,
  setVisible,
  animationType = 'slide',
  children
}) {
  const actionSheetRef = useRef(null);

  const openSheet=()=>{
    setVisible(true);
    actionSheetRef.current?.show();
  }

  const closeSheet = () => {
    setVisible(false);
    actionSheetRef.current?.hide();
  };
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 16, fontWeight: 'bold', margin: 5}}>
        Welcome to Our App!
      </Text>
      <TouchableOpacity style={styles.button} onPress={openSheet}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>

      <Modal
        visible={visible}
        transparent
        animationType={animationType}
        statusBarTranslucent>
        <TouchableWithoutFeedback onPress={closeSheet}>
          <View style={[styles.overlay, backdropStyle]}>
            <TouchableWithoutFeedback>
              <View
                style={[
                  styles.sheet,
                  containerStyle,
                ]}>
                <SheetHeader
                  title={title}
                  onPress={closeSheet}
                  showCloseIcon={showCloseIcon}
                />
                 <View>
                  {children}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(138, 129, 129, 0.3)',
    justifyContent: 'flex-end',
  },
  sheet: {
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: Platform.OS === 'ios' ? 34 : 16,
    minHeight:hp(20)
  },
  sheetText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    marginTop:15,
    fontFamily:'Times New Roman'
  },
};