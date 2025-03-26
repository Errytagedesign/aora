import { useState } from 'react';
import { ResizeMode, Video } from 'expo-av';
import * as Animatable from 'react-native-animatable';
import {
  FlatList,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import { icons } from '../constants';
import React from 'react';

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};

const zoomOut = {
  0: {
    scale: 1.5,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({
  activeItem,
  item,
}: {
  activeItem: Post;
  item: Post;
}) => {
  const [play, setPlay] = useState(false);

  return (
    <Animatable.View
      className='mr-5'
      animation={activeItem.$id === item.$id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={{ uri: item.video }}
          className='w-52 h-72 rounded-[33px] mt-3 bg-white/10'
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.isLoaded && status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className='relative flex justify-center items-center'
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <ImageBackground
            source={{
              uri: item.thumbnail,
            }}
            className='w-52 h-72 rounded-[33px] my-5 overflow-hidden shadow-lg shadow-black/40'
            resizeMode='cover'
          />

          <Image
            source={icons.play}
            className='w-12 h-12 absolute'
            resizeMode='contain'
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

interface Post {
  $id: string;
  video: string;
  thumbnail: string;
}

const Trending = ({ posts }: { posts: Post[] }) => {
  const [activeItem, setActiveItem] = useState(posts[0]);

  const viewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<{ key: string }>;
  }) => {
    if (viewableItems.length > 0) {
      const activePost = posts.find(
        (post) => post.$id === viewableItems[0].key,
      );
      if (activePost) {
        setActiveItem(activePost);
      }
    }
  };

  return (
    <FlatList
      data={posts}
      horizontal
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 70,
      }}
      contentOffset={{ x: 170, y: 0 }}
    />
  );
};

export default Trending;
