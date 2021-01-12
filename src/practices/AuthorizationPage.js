import React, { useState } from 'react'
import { Text, View, PermissionsAndroid, Platform, Button, StyleSheet } from 'react-native'

const AuthorizationPage = () => {
    const [permissionGranted, setPermissionGranted] = useState(false)

    const handleAskPermissions = () => {
        const permissions = [
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.CAMERA,
        ]
        if (Platform === 'android') {
            PermissionsAndroid.requestMultiple(permissions)
                .then((data) => {
                    const hasPermission = Object.values(data).every(item => item === 'granted')
                    if (hasPermission) {
                        setPermissionGranted(true)
                    }
                })
        } else {
            setPermissionGranted(true)
        }
    }
    return (
        <View>
            <Text style={styles.text}>
                {permissionGranted ? '已授权' : '未授权'}
            </Text>
            <Button title="请求授权" onPress={handleAskPermissions} />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 30,
    },
})

export default AuthorizationPage
