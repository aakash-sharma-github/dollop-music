import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from './types';
import HomeScreen from '../screens/main/HomeScreen';
import SearchScreen from '../screens/main/SearchScreen';
import LibraryScreen from '../screens/main/LibraryScreen';
import MiniPlayer from '../components/player/MiniPlayer';
import { colors, spacing, typography } from '../utils/theme';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

// Custom tab bar icon component
const TabIcon = ({ 
  focused, 
  icon, 
  label 
}: { 
  focused: boolean; 
  icon: string; 
  label: string;
}) => {
  return (
    <View style={styles.tabIconContainer}>
      <Text style={[
        styles.tabIcon, 
        focused && styles.tabIconActive
      ]}>
        {icon}
      </Text>
      <Text style={[
        styles.tabLabel, 
        focused && styles.tabLabelActive
      ]}>
        {label}
      </Text>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.text.primary,
          tabBarInactiveTintColor: colors.text.tertiary,
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="🏠" label="Home" />
            ),
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="🔍" label="Search" />
            ),
          }}
        />
        <Tab.Screen 
          name="Library" 
          component={LibraryScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon="📚" label="Your Library" />
            ),
          }}
        />
      </Tab.Navigator>
      
      {/* Mini Player at the bottom of the screen */}
      <MiniPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tabBar: {
    backgroundColor: colors.background.elevated,
    borderTopColor: colors.ui.divider,
    height: 80,
    paddingBottom: spacing.medium,
    paddingTop: spacing.small,
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    fontSize: 20,
    marginBottom: spacing.xxs,
  },
  tabIconActive: {
    color: colors.primary.brand,
  },
  tabLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
  },
  tabLabelActive: {
    color: colors.text.primary,
  },
});

export default TabNavigator;

