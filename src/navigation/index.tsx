import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar, View, ActivityIndicator } from 'react-native';
import { RootStackParamList } from './types';
import AuthStack from './AuthStack';
import TabNavigator from './TabNavigator';
import { colors } from '../utils/theme';

// Create a context for auth state that can be used throughout the app
type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  isLoading: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  isLoading: false,
});

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  // In a real app, this would be connected to actual authentication logic
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate checking for an existing user session
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        // In a real app, this would check for a stored token or session
        // For demo purposes, we'll just simulate a loading delay
        setTimeout(() => {
          // Start with not authenticated
          setIsAuthenticated(false);
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error checking auth state:', error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuthState();
  }, []);

  // Auth context value
  const authContextValue = {
    isAuthenticated,
    login: () => {
      // Simulate login
      setIsAuthenticated(true);
    },
    logout: () => {
      // Simulate logout
      setIsAuthenticated(false);
    },
    isLoading,
  };

  // Show loading spinner while checking auth state
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background.base }}>
        <ActivityIndicator size="large" color={colors.primary.brand} />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContextValue}>
      <SafeAreaProvider>
        <StatusBar barStyle="light-content" backgroundColor={colors.background.base} />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAuthenticated ? (
              // User is signed in
              <Stack.Screen name="Main" component={TabNavigator} />
            ) : (
              // User is not signed in
              <Stack.Screen name="Auth" component={AuthStack} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
};

export default AppNavigator;

