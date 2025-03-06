import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BaggageClaim, Eye, EyeOff, ShoppingBag} from 'lucide-react-native';

const SignInScreen = ({
  navigation,
  onSignIn,
  onGuestSignIn,
  isGuestLogin,
}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = async () => {
    if (email.trim() && password.trim()) {
      try {
        await AsyncStorage.setItem('userToken', 'dummy-token');
        // Navigate first
        if (isGuestLogin) {
          navigation.navigate('Home');
        }
        // Then update auth state
        onSignIn();
      } catch (error) {
        console.error('Error storing user token:', error);
        Alert.alert('Error', 'Something went wrong. Please try again.');
      }
    } else {
      Alert.alert('Missing Fields', 'Please enter both email and password.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 px-6 justify-center">
        {/* Sign In Text */}
        {!isGuestLogin && (
          <Text className="text-xl text-blue-500 font-semibold absolute top-4 left-4 text-center mb-6">
            Sign In
          </Text>
        )}

        <View className="mb-auto mt-auto">
          {/* Logo */}
          <View className="items-center mb-8">
            <Text className="text-4xl flex items-end !font-thin font-mono">
              F<ShoppingBag color={'#3b82f6'} className="text-blue-500" />
              sn
            </Text>
          </View>
          {/* Email Input */}
          <View className="mb-4 flex items-start">
            <Text className="mb-1 font-bold">Email Address / Username</Text>
            <TextInput
              placeholder="johndoe@gmail.com"
              value={email}
              onChangeText={setEmail}
              className="border w-full border-gray-300 rounded-lg px-4 py-3 text-black"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Password Input */}
          <View className="mb-2 flex items-start relative">
            <Text className="mb-1 font-bold">Password</Text>
            <TextInput
              placeholder="********"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              className="border w-full border-gray-300 rounded-lg px-4 py-3 text-black pr-12"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity
              className="absolute right-4 top-10"
              onPress={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeOff color="#6B7280" size={20} />
              ) : (
                <Eye color="#6B7280" size={20} />
              )}
            </TouchableOpacity>
          </View>

          {/* Forgot Password */}
          <TouchableOpacity className="mb-4 self-end">
            <Text className="text-blue-700 text-right">Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        {/* Sign In Button */}
        <View className="mb-10 mx-auto flex items-center">
          <TouchableOpacity
            className="bg-blue-600 text-xl w-[10rem] rounded-full py-4 items-center mb-4"
            onPress={handleSignIn}>
            <Text className="text-white font-bold text-base">Sign In</Text>
          </TouchableOpacity>

          {!isGuestLogin && (
            <View className="flex-row justify-center">
              <Text className="text-gray-600">Don't have an account? </Text>
              <TouchableOpacity onPress={() => onGuestSignIn()}>
                <Text className="text-blue-600 font-bold">Guest Login</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
