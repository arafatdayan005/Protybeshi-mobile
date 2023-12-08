import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const userEmail = await AsyncStorage.getItem('userEmail');
        if (userEmail !== null) {
          setEmail(userEmail);
        }
      } catch (error) {
        console.error('Error fetching user email:', error);
      }
    };

    fetchUserEmail();
  }, []);

  return (
    <View>
      <Text className="text-red-500">sgfdg{email}</Text>
    </View>
  )
}

export default Profile