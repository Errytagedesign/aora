import { FlatList, RefreshControl, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { images } from '@/constants';
import SearchInput from '@/components/SearchInput';
import EmptyState from '@/components/EmptyState';
import useAppwrite from '@/libs/useAppwrite';
import { getAllPosts, getLatestPosts } from '@/libs/appWrite';
import VideoCard from '@/components/VideoCard';
import Trending from '@/components/Trending';

const Home = () => {
  const { data, loading, refetch } = useAppwrite(getAllPosts);
  const { data: lastestPost } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState<boolean>(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  // one flatlist
  // with list header
  // and horizontal flatlist

  //  we cannot do that with just scrollview as there's both horizontal and
  // vertical scroll (two flat lists, within trending)

  return (
    <SafeAreaView className='bg-black h-full'>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item?.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item?.creators?.username}
            avatar={item?.creators?.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className='my-6 px-4 space-y-7'>
            <View className='flex flex-row items-center justify-between mb-4'>
              <View>
                <Text className='text-grey1'>Welcome Back</Text>
                <Text className='text-white uppercase font-bold text-2xl'>
                  CODEEQ
                </Text>
              </View>
              <View className='flex justify-end'>
                <Image
                  source={images.logoSmall}
                  className='w-9 h-9'
                  resizeMode='contain'
                />
              </View>
            </View>
            <SearchInput />
            <View className='w-full flex-1 pt-5 pb-8'>
              <Text className='text-lg font-pregular text-gray-100 mb-3'>
                Latest Videos
              </Text>

              <Trending posts={lastestPost ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title='No Videos Found'
            subtitle='No videos created yet'
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
