import {Text, View} from 'react-native';

const AppLogo = () => (
  //   <View className="w-full flex justify-center items-center">
  //     <Text className="text-2xl text-center tracking-wider text-black">
  //       F<Text className="text-blue-500 font-bold">o</Text>sn
  //     </Text>
  //   </View>
  <View style={{width: '100%', justifyContent: 'center', alignItems: 'center'}}>
    <Text
      style={{
        fontSize: 24,
        textAlign: 'center',
        letterSpacing: 2,
        color: 'black',
      }}>
      F<Text style={{color: '#3B82F6', fontWeight: 'bold'}}>o</Text>
      sn
    </Text>
  </View>
);

export default AppLogo;
