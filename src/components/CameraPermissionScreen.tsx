import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType, TextStyle, ViewStyle } from 'react-native';

interface CameraPermissionScreenProps {
  title: string;
  description: string;
  buttonText: string;
  onRequestPermission: () => void;
  icon?: ImageSourcePropType;
  titleStyle?: TextStyle;
  descriptionStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  buttonTextStyle?: TextStyle;
  permissionStatus?: 'granted' | 'denied' | 'blocked' | "unavailable" | "limited" |null;
}

const CameraPermissionScreen: React.FC<CameraPermissionScreenProps> = ({
  title,
  description,
  buttonText,
  onRequestPermission,
  icon,
  titleStyle,
  descriptionStyle,
  buttonStyle,
  buttonTextStyle,
  permissionStatus,
}) => {
  return (
    <View style={styles.container}>
      {icon && <Image source={icon} style={styles.icon} />}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.description, descriptionStyle]}>{description}</Text>
      {permissionStatus !== 'granted' && (
        <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onRequestPermission}>
          <Text style={[styles.buttonText, buttonTextStyle]}>{buttonText}</Text>
        </TouchableOpacity>
      )}
      {permissionStatus === 'denied' && (
        <Text style={styles.errorText}>Permission Denied. Please enable it from settings.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  errorText: {
    marginTop: 10,
    color: 'red',
  },
});

export default CameraPermissionScreen;
