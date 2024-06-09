import React, { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IBtn {
  title: string;
  handlePress: () => void;
  textStyle?: string;
  containerStyles: string;
  isLoading?: boolean;
}

const CustomBtn: FC<IBtn> = ({
  title,
  handlePress,
  textStyle,
  containerStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`${containerStyles} bg-pryColor rounded-xl justify-center items-center min-h-[60px] ${
        isLoading ? 'opacity-50' : ''
      }`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <Text className={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBtn;
