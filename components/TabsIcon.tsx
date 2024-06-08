import { Image, ImageSourcePropType, Text, View } from 'react-native';
import React from 'react';

interface ITabIcons {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
}
const TabsIcon: React.FC<ITabIcons> = ({ icon, color, name, focused }) => {
  return (
    <View className='items-center justify-center gap-1'>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={color}
        className='w-6 h-6'
      />

      <Text className={focused ? 'font-psemibold' : 'font-pregular'}>
        {name}
      </Text>
    </View>
  );
};

export default TabsIcon;
