import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useGlobalContext } from '@/context/GlobalProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { images } from '@/constants';

const Home = () => {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView>
        <View className=' w-[90%] m-auto py-10 h-[85vh] my-6'>
          <View className='flex justify-between'>
            <View>
              <Text className='text-grey1'>Welcome Back</Text>
              <Text className='text-white uppercase font-bold text-2xl'>
                {user?.username}
              </Text>
            </View>
            <Image
              source={images.logoSmall}
              className='w-[120px] h-[34px]'
              resizeMode='contain'
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
