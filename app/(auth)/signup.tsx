import {
  View,
  Text,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Image,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';
import { images } from '@/constants';
import FormField from '@/components/FormField';
import CustomBtn from '@/components/CustomBtn';
import { Link, useRouter } from 'expo-router';
import { createUser } from '@/libs/appWrite';

const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState<{ [key: string]: string }>({
    email: '',
    username: '',
    password: '',
  });

  const router = useRouter();

  const handleChange = (
    id: string,
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const { text } = e.nativeEvent;

    setForm((prev) => ({ ...prev, [id]: text }));
  };

  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    setIsSubmitting(true);
    console.log(isSubmitting);
    try {
      const result = await createUser(form.email, form.password, form.username);

      // router.replace('/home');
      console.log('sign', result);
    } catch (error: any) {
      console.log('sie', error);
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className='bg-black h-full'>
      <ScrollView>
        <View
          className=' w-[90%] justify-center m-auto py-10 h-[85vh] my-6'
          // style={{
          //   minHeight: Dimensions.get('window').height - 100,
          // }}
        >
          <Image
            source={images.logo}
            className='w-[120px] h-[34px]'
            resizeMode='contain'
          />
          <Text className='text-white text-2xl font-bold  mt-10'>
            {' '}
            Sign up for Aora
          </Text>

          <FormField
            inputId='username'
            value={form.username}
            title='username'
            placeholder='Your unique username'
            handleChangeText={(e) => handleChange('username', e)}
            otherStyles='mt-7'
          />
          <FormField
            inputId='email'
            value={form.email}
            title='Email'
            placeholder='Enter your email'
            handleChangeText={(e) => handleChange('email', e)}
            otherStyles='mt-7'
            keyboardType='email-address'
          />
          <FormField
            inputId='password'
            value={form.password}
            title='Password'
            placeholder='Enter your password'
            handleChangeText={(e) => handleChange('password', e)}
            otherStyles='mt-7'
          />
          <CustomBtn
            title={isSubmitting ? 'Signing up...' : 'Sign Up'}
            handlePress={submit}
            containerStyles='mt-7'
            isLoading={isSubmitting}
            textStyle='font-semibold text-xl'
          />

          <View className='flex justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-gray-100 font-pregular'>
              Already have an account?
            </Text>
            <Link
              href='/signin'
              className='text-lg font-psemibold text-pryColor'
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
