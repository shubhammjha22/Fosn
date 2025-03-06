import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ProductDetailScreen = ({navigation}: any) => {
  return (
    // <SafeAreaView className="flex-1 bg-white space-y-6">
    //   <View className="flex-1 p-6">
    //     <Image
    //       source={{uri: 'https://via.placeholder.com/150'}}
    //       className="w-full h-[16rem] bg-slate-400 rounded-lg"
    //       resizeMode="cover"
    //     />

    //     <TouchableOpacity className="bg-blue-600 mx-4 mt-4 rounded-lg p-4 item-center">
    //       <Text className="text-white fond-bold">
    //         Participate in #MyFashhion Channel
    //       </Text>
    //     </TouchableOpacity>

    //     <View className="px-4 mt-4">
    //       <Text className="text-xl font-bold mb-4">Related Shorts</Text>
    //     </View>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{uri: 'https://via.placeholder.com/150'}}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity style={styles.participateButton}>
          <Text style={styles.participateButtonText}>
            Participate in #MyFashhion Channel
          </Text>
        </TouchableOpacity>

        <View style={styles.relatedContainer}>
          <Text style={styles.relatedTitle}>Related Shorts</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  image: {
    width: '100%',
    height: 256, // 16rem converted to pixels
    backgroundColor: '#94a3b8',
    borderRadius: 8,
  },
  participateButton: {
    backgroundColor: '#2563eb',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  participateButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  relatedContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  relatedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default ProductDetailScreen;
