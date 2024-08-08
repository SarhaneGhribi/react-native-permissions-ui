import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CameraPermissionScreen,usePermission } from 'react-native-permissions-ui';
import { PERMISSIONS } from 'react-native-permissions';

const App: React.FC = () => {
  const { status, requestPermission } = usePermission(PERMISSIONS.ANDROID.CAMERA);

  return (
    <View style={styles.container}>
      <CameraPermissionScreen
        title="Camera Permission Required"
        description="We need access to your camera to take photos."
        buttonText="Grant Permission"
        onRequestPermission={requestPermission}
        icon={require('./assets/camera.png')}
        permissionStatus={status}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
