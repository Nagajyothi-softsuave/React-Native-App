import React, {useState} from 'react';
import Sheet from './src/Sheet';

function App(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const [animationType, setAnimationType] = useState<'slide' | 'fade' | 'none'>(
    'slide',
  );

  const renderSheetContent = () => {
    return (<></>)
  };

  return (
    <Sheet
      showCloseIcon={true}
      visible={visible}
      setVisible={setVisible}
      animationType={animationType}>
      {renderSheetContent()}
    </Sheet>
  );
}

export default App;
