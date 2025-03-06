import React from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const shortsData = [
  {id: 1, title: 'Short 1'},
  {id: 2, title: 'Short 2'},
  {id: 3, title: 'Short 3'},
  {id: 4, title: 'Short 4'},
  {id: 5, title: 'Short 5'},
];

const ShortsScreen = () => {
  return (
    <ScrollView>
      <View className="flex-1 justify-center items-center">
        <Text className="text-black text-2xl">Dummy </Text>
      </View>
    </ScrollView>
  );
};

export default ShortsScreen;
