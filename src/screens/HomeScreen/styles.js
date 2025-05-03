import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
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
});
