import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const ProductDetailScreen = ({navigation}: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white space-y-6">
      <View className="flex-1 p-6">
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          className="w-full h-[16rem] bg-slate-400 rounded-lg"
          resizeMode="cover"
        />

        <TouchableOpacity className="bg-blue-600 mx-4 mt-4 rounded-lg p-4 item-center">
          <Text className="text-white fond-bold">
            Participate in #MyFashhion Channel
          </Text>
        </TouchableOpacity>

        <View className="px-4 mt-4">
          <Text className="text-xl font-bold mb-4">Related Shorts</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
