import React from 'react';
import {TouchableOpacity} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import {ArrowLeft} from 'lucide-react-native';
import ShortsScreen from '../screens/ShortsScreen';
import CustomTabBar from './components/TabIcon';
import AppLogo from './components/AppLogo';
import SignInScreen from '../screens/LoginScreen';

const AppNavigator = ({
  setIsAuthenticated,
  isGuestLogin,
  setIsGuestLogin,
  isAuthenticated,
}: any) => {
  const Stack = createBottomTabNavigator();
  return (
    <Stack.Navigator
      tabBar={props => (
        <CustomTabBar
          isGuestLogin={isGuestLogin}
          setIsGuestLogin={setIsGuestLogin}
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          {...props}
        />
      )}>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: props => <AppLogo />,
          headerTitleAlign: 'center',
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="ProductDetails"
        options={({navigation}) => ({
          headerTitle: '',
          headerStyle: {
            borderBottomWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{paddingHorizontal: 16}}
              //   className="px-4"
              onPress={() => navigation.navigate('Home')}>
              {/* <ArrowLeft className="text-black ml-12 w-32" size={24} /> */}
              <ArrowLeft style={{marginLeft: 2, width: 128}} size={24} />
            </TouchableOpacity>
          ),
        })}
        component={ProductDetailScreen}
      />
      <Stack.Screen name="Shorts" component={ShortsScreen} />
      <Stack.Screen name="ProductInfo" component={ProductDetailScreen} />

      <Stack.Screen name="Login" options={{headerShown: false}}>
        {props => (
          <SignInScreen
            {...props}
            onSignIn={() => setIsAuthenticated(true)}
            isGuestLogin={isGuestLogin}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
