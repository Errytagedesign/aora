import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomBtn from '@/components/CustomBtn';
import { useGlobalContext } from '@/context/GlobalProvider';

const index = () => {
  const { loading, isLoggedIn } = useGlobalContext();

  const router = useRouter();

  if (!loading && isLoggedIn) return <Redirect href='/home' />;
  return (
    <SafeAreaView className=' bg-black h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full min-h-[85vh] items-center justify-center px-4 '>
          <Image
            source={images.logo}
            className='w-[120px] h-[34px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-full h-[380px]'
            resizeMode='contain'
          />

          <View className='relative mt-6'>
            <Text className='text-3xl text-center font-bold text-white'>
              Discover Endless Possibilities with{' '}
              <Text className='text-pryColor'>Aora</Text>
            </Text>
            <Image
              source={images.path}
              className='w-[136px] h-[15px] absolute -bottom-2 -right-9'
              resizeMode='contain'
            />
          </View>
          <Text className='text-sm text-grey1 text-center my-6 '>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomBtn
            containerStyles='bg-pryColor w-full '
            title='Continue with Email'
            textStyle='font-semibold text-sm'
            handlePress={() => router.push('/signin')}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default index;
