import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pbold'>Hommie</Text>
      <StatusBar style='auto' />

      <Text className='text-3xl font-bold uppercase cursor-pointer'>
        <Link href='/home' style={{ color: 'red' }}>
          {' '}
          Go home nahs{' '}
        </Link>
      </Text>
    </View>
  );
};

export default index;
