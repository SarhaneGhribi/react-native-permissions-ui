// src/hooks/usePermission.ts
import { useState, useEffect } from 'react';
import { check, request, PERMISSIONS, RESULTS, PermissionStatus } from 'react-native-permissions';

const usePermission = (permissionType: typeof PERMISSIONS.ANDROID.CAMERA | typeof PERMISSIONS.IOS.CAMERA) => {
  const [status, setStatus] = useState<PermissionStatus | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      const result = await check(permissionType);
      setStatus(result);
    };

    checkPermission();
  }, [permissionType]);

  const requestPermission = async () => {
    const result = await request(permissionType);
    setStatus(result);
  };

  return { status, requestPermission };
};

export default usePermission;
