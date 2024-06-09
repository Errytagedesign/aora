import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import TabsIcon from '@/components/TabsIcon';
import icons from '@/constants/icons';

const data = [
  { id: 1, title: 'Home', icon: icons.home },
  { id: 4, title: 'Bookmark', icon: icons.bookmark },
  { id: 2, title: 'Create', icon: icons.plus },
  { id: 3, title: 'Profile', icon: icons.profile },
];

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          borderTopWidth: 1,
          borderTopColor: '#232533',
          height: 84,
        },
      }}
    >
      {data.map(({ id, title, icon }) => (
        <Tabs.Screen
          key={id}
          name={title.toLowerCase()}
          options={{
            title,
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabsIcon
                name={title}
                color={color}
                focused={focused}
                icon={icon}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
