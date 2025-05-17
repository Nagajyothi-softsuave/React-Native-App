import React from 'react';
import {SheetProvider} from 'react-native-actions-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Sheet from './src/Sheet';


function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
    <SheetProvider>
     <Sheet />
    </SheetProvider>
    </SafeAreaProvider>
  );
}

export default App;
