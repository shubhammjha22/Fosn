import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Search} from 'lucide-react-native';
import {useState} from 'react';

const HomeScreen = ({navigation}: any) => {
  const trendingFashion = [
    {
      id: 1,
      name: 'Trending Fashion 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Trending Fashion 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Trending Fashion 3',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Trending Fashion 4',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Trending Fashion 5',
      image: 'https://via.placeholder.com/150',
    },
  ];

  const latestProducts = [
    {id: 1, name: 'Product 1', image: 'https://via.placeholder.com/150'},
    {id: 2, name: 'Product 2', image: 'https://via.placeholder.com/150'},
    {id: 3, name: 'Product 3', image: 'https://via.placeholder.com/150'},
    {id: 4, name: 'Product 4', image: 'https://via.placeholder.com/150'},
    {id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150'},
  ];

  const banners = [
    {
      id: 1,
      image: 'https://via.placeholder.com/350x150',
      title: 'Summer Collection',
      onPress: () => {
        // Add navigation or action for first banner
      },
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/350x150?text=Banner+2',
      title: 'New Arrivals',
      onPress: () => {
        // Add navigation or action for second banner
      },
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/350x150',
      title: 'Special Offers',
      onPress: () => {
        // Add navigation or action for third banner
      },
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/350x150',
      title: 'Special Offers',
      onPress: () => {
        // Add navigation or action for third banner
      },
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/350x150',
      title: 'Special Offers',
      onPress: () => {
        // Add navigation or action for third banner
      },
    },
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / 350); // 350 is the width of the banner
    setCurrentBannerIndex(index);
  };

  return (
    // <SafeAreaView className="bg-white flex-1">
    //   <ScrollView>
    //     <View className="flex-1 p-4 min-h-20 ">
    //       <View className="p-1 px-3 relative flex items-center justify-between flex-row bg-slate-200 rounded-lg">
    //         <TextInput
    //           placeholder="Search..."
    //           style={{color: 'black'}}
    //           className="p-2 flex-1 placeholder:text-black"
    //         />
    //         <Search className="w-5 h-5 " />
    //       </View>
    //     </View>

    //     <View className="px-4 mt-4 mb-6">
    //       <ScrollView
    //         horizontal
    //         pagingEnabled
    //         showsHorizontalScrollIndicator={false}
    //         className="rounded-lg"
    //         onScroll={handleScroll}
    //         scrollEventThrottle={16}>
    //         {banners.map(banner => (
    //           <TouchableOpacity
    //             key={banner.id}
    //             onPress={banner.onPress}
    //             className="mr-2">
    //             <Image
    //               source={{uri: banner.image}}
    //               className="w-[350px] h-[150px] rounded-lg bg-slate-400"
    //               resizeMode="cover"
    //             />
    //           </TouchableOpacity>
    //         ))}
    //       </ScrollView>

    //       {/* Pagination Dots */}
    //       <View className="flex-row gap-2 justify-center -mt-5 space-x-2">
    //         {banners.map((_, index) => (
    //           <View
    //             key={index}
    //             className={`w-2 h-2 rounded-full ${
    //               index === currentBannerIndex ? 'bg-gray-600' : 'bg-gray-300'
    //             }`}
    //           />
    //         ))}
    //       </View>
    //     </View>

    //     <View className="px-4">
    //       <Text className="text-xl font-bold mb-4">Trending Fashion</Text>

    //       <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    //         {trendingFashion.map(item => (
    //           <TouchableOpacity
    //             key={item.id}
    //             className="mr-4"
    //             onPress={() => navigation.navigate('ProductDetails', {item})}>
    //             <Image className="w-32 h-60 rounded-lg bg-slate-400" />
    //           </TouchableOpacity>
    //         ))}
    //       </ScrollView>
    //     </View>

    //     <View className="px-4 mt-6">
    //       <Text className="text-xl font-bold mb-4">Latest Products</Text>

    //       <View className="flex flex-row justify-between">
    //         {latestProducts.map(item => (
    //           <TouchableOpacity
    //             key={item.id}
    //             className="mr-4"
    //             onPress={() => navigation.navigate('ProductDetails', {item})}>
    //             <Image className="w-[12rem] h-60 rounded-lg bg-slate-400" />
    //           </TouchableOpacity>
    //         ))}
    //       </View>
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Search..."
              style={styles.searchInput}
              placeholderTextColor="black"
            />
            <Search width={20} height={20} />
          </View>
        </View>

        <View style={styles.bannerContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            style={styles.bannerScrollView}
            onScroll={handleScroll}
            scrollEventThrottle={16}>
            {banners.map(banner => (
              <TouchableOpacity
                key={banner.id}
                onPress={banner.onPress}
                style={styles.bannerButton}>
                <Image
                  source={{uri: banner.image}}
                  style={styles.bannerImage}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Pagination Dots */}
          <View style={styles.paginationDotsContainer}>
            {banners.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.paginationDot,
                  index === currentBannerIndex
                    ? styles.paginationDotActive
                    : styles.paginationDotInactive,
                ]}
              />
            ))}
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Trending Fashion</Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {trendingFashion.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.trendingItem}
                onPress={() => navigation.navigate('ProductDetails', {item})}>
                <Image style={styles.trendingImage} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Latest Products</Text>

          <View style={styles.latestProductsContainer}>
            {latestProducts.map(item => (
              <TouchableOpacity
                key={item.id}
                style={styles.latestProductItem}
                onPress={() => navigation.navigate('ProductDetails', {item})}>
                <Image style={styles.latestProductImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    flex: 1,
    padding: 16,
    minHeight: 80,
  },
  searchInputContainer: {
    padding: 4,
    paddingHorizontal: 12,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e2e8f0',
    borderRadius: 8,
  },
  searchInput: {
    padding: 8,
    flex: 1,
    color: 'black',
  },
  bannerContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  bannerScrollView: {
    borderRadius: 8,
  },
  bannerButton: {
    marginRight: 8,
  },
  bannerImage: {
    width: 350,
    height: 150,
    borderRadius: 8,
    backgroundColor: '#94a3b8',
  },
  paginationDotsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    marginTop: -20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  paginationDotActive: {
    backgroundColor: '#4b5563',
  },
  paginationDotInactive: {
    backgroundColor: '#d1d5db',
  },
  sectionContainer: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  trendingItem: {
    marginRight: 16,
  },
  trendingImage: {
    width: 128,
    height: 240,
    borderRadius: 8,
    backgroundColor: '#94a3b8',
  },
  latestProductsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  latestProductItem: {
    marginRight: 16,
  },
  latestProductImage: {
    width: 192, // 12rem converted to pixels
    height: 240,
    borderRadius: 8,
    backgroundColor: '#94a3b8',
  },
});

export default HomeScreen;
