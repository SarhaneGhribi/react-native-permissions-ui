# react-native-permissions-ui

A React Native package for creating custom UI screens to request permissions, such as camera access, with a simple and customizable API.

## Features

- Customizable UI for permission requests
- Support for camera permission
- Hooks for permission status management

## Installation

```bash
npm install react-native-permissions-ui react-native-permissions
```

## Usage

### Basic Example

First, ensure you have the necessary setup for React Native Permissions. Follow the setup instructions

Then, you can use the CameraPermissionScreen component and usePermission hook in your project as shown below:

```typescript
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  CameraPermissionScreen,
  usePermission,
} from "react-native-permissions-ui";
import { PERMISSIONS } from "react-native-permissions";

const App: React.FC = () => {
  const { status, requestPermission } = usePermission(
    PERMISSIONS.ANDROID.CAMERA
  );

  return (
    <View style={styles.container}>
      <CameraPermissionScreen
        title="Camera Permission Required"
        description="We need access to your camera to take photos."
        buttonText="Grant Permission"
        onRequestPermission={requestPermission}
        icon={require("./assets/camera.png")}
        permissionStatus={status}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
```

### Customizing the UI

You can customize the CameraPermissionScreen component by passing styles and an icon:

```typescript
<CameraPermissionScreen
  title="Camera Permission Required"
  description="We need access to your camera to take photos."
  buttonText="Grant Permission"
  onRequestPermission={requestPermission}
  icon={require("./assets/camera.png")}
  permissionStatus={status}
  titleStyle={{ fontSize: 24, color: "blue" }}
  descriptionStyle={{ fontSize: 16, color: "gray" }}
  buttonStyle={{ backgroundColor: "green" }}
  buttonTextStyle={{ color: "white" }}
/>
```

## API

### CameraPermissionScreen

A component that displays a screen to request camera permission.

### Props

| **Prop**              | **Type**             | **Description**                                               |
| --------------------- | -------------------- | ------------------------------------------------------------- |
| `title`               | `string`             | The title of the permission request screen.                   |
| `description`         | `string`             | The description of why the permission is needed.              |
| `buttonText`          | `string`             | The text displayed on the permission request button.          |
| `onRequestPermission` | `() => void`         | The function to call when the button is pressed.              |
| `icon`                | `mageSourcePropType` | An optional icon to display on the screen.                    |
| `titleStyle`          | `TextStyle`          | Custom styles for the title text.                             |
| `onRequestPermission` | `TextStyle`          | Custom styles for the button.                                 |
| `onRequestPermission` | `ViewStyle`          | Custom styles for the button.                                 |
| `onRequestPermission` | `TextStyle`          | Custom styles for the button text.                            |
| `onRequestPermission` | `string \| null`     | granted \| denied \| blocked \| unavailable \| limited \|null |

### usePermission

A custom hook for managing permission status.

| **Parameter**    | **Type**                                                             | **Description**                  |
| ---------------- | -------------------------------------------------------------------- | -------------------------------- |
| `permissionType` | `typeof PERMISSIONS.ANDROID.CAMERA \| typeof PERMISSIONS.IOS.CAMERA` | The type of permission to check. |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
