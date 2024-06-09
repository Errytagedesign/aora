import React, { FC, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TextInputProps,
} from 'react-native';
import { icons } from '@/constants';

interface IFormField extends TextInputProps {
  title: string;
  value: string;
  handleChangeText: (e: NativeSyntheticEvent<TextInputChangeEventData>) => void;
  placeholder: string;
  otherStyles?: string;
  inputId: string;
}

const FormField: FC<IFormField> = ({
  title,
  value,
  handleChangeText,
  placeholder,
  otherStyles,
  inputId,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-grey1'>{title}</Text>
      <View
        className={`rounded-xl border-2 border-black-100 bg-black-200 focus:border-pryColor p-3 h-16 justify-center items-center flex-row mt-3`}
      >
        <TextInput
          id={inputId}
          className='flex-1 text-white font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#7B7B8B'
          onChange={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eyeHide : icons.eye}
              className='w-6 h-6'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
