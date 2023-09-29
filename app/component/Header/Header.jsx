import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserInfoContext } from '../../context/UserInfo';

export default function Header() {
    const { userInfo, setUserInfo } = React.useContext(UserInfoContext);
    const navigation = useNavigation();

    return (
        userInfo !== null ? (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('User')}
            >
         
            </TouchableOpacity>
        ) : (
            <TouchableOpacity
                style={{ marginRight: 10 }}
                onPress={() => navigation.navigate('SignIn')}
            >
            </TouchableOpacity>
        )
    );
}
