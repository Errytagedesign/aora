import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import TabsIcon from '@/components/TabsIcon';
import icons from '@/constants/icons';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabsIcon
              name='Home'
              color={color}
              focused={focused}
              icon={icons.home}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
