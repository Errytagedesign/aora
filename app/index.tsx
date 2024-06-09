import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '@/constants';
import CustomBtn from '@/components/CustomBtn';

const index = () => {
  const router = useRouter();
  return (
    <SafeAreaView className=' bg-black flex-1 items-center justify-center overflow-hidden h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-11/12 min-h-[85vh] items-center justify-center px-4'>
          <Image
            source={images.logo}
            className='w-[120px] h-[34px]'
            resizeMode='contain'
          />
          <Image
            source={images.cards}
            className='w-[380px] h-[380px]'
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
            containerStyle='bg-pryColor w-full '
            title='Continue with Email'
            textStyle='font-semibold text-sm'
            handlePress={() => router.push('/signup')}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
};

export default index;
