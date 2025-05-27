import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

// Mock data for featured playlists
const FEATURED_PLAYLISTS = [
  { id: '1', title: 'Today\'s Top Hits', image: 'https://via.placeholder.com/150', description: 'The most played tracks right now' },
  { id: '2', title: 'Discover Weekly', image: 'https://via.placeholder.com/150', description: 'Your weekly mixtape of fresh music' },
  { id: '3', title: 'Chill Vibes', image: 'https://via.placeholder.com/150', description: 'Laid back beats for relaxation' },
  { id: '4', title: 'Workout Energy', image: 'https://via.placeholder.com/150', description: 'Motivation for your exercise routine' },
];

// Mock data for recently played
const RECENTLY_PLAYED = [
  { id: '1', title: 'Liked Songs', image: 'https://via.placeholder.com/80' },
  { id: '2', title: 'Your Top 2025', image: 'https://via.placeholder.com/80' },
  { id: '3', title: 'Summer Hits', image: 'https://via.placeholder.com/80' },
  { id: '4', title: 'Throwback Classics', image: 'https://via.placeholder.com/80' },
  { id: '5', title: 'Road Trip Mix', image: 'https://via.placeholder.com/80' },
  { id: '6', title: 'Acoustic Covers', image: 'https://via.placeholder.com/80' },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  // Render a single playlist item for the Featured section
  const renderFeaturedItem = ({ item }: { item: typeof FEATURED_PLAYLISTS[0] }) => (
    <TouchableOpacity 
      style={styles.featuredItem}
      onPress={() => console.log(`Navigate to playlist ${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.featuredImage} />
      <Text style={styles.featuredTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.featuredDescription} numberOfLines={2}>{item.description}</Text>
    </TouchableOpacity>
  );

  // Render a single item for the Recently Played section
  const renderRecentItem = ({ item }: { item: typeof RECENTLY_PLAYED[0] }) => (
    <TouchableOpacity 
      style={styles.recentItem}
      onPress={() => console.log(`Navigate to playlist ${item.id}`)}
    >
      <Image source={{ uri: item.image }} style={styles.recentImage} />
      <Text style={styles.recentTitle} numberOfLines={2}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Good evening</Text>
          <View style={styles.headerIcons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>🔔</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={styles.iconText}>⚙️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Recently Played Section */}
        <Text style={styles.sectionTitle}>Recently played</Text>
        <FlatList
          data={RECENTLY_PLAYED}
          renderItem={renderRecentItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recentList}
        />

        {/* Featured Playlists Section */}
        <Text style={styles.sectionTitle}>Featured playlists</Text>
        <FlatList
          data={FEATURED_PLAYLISTS}
          renderItem={renderFeaturedItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
        />

        {/* Made For You Section */}
        <Text style={styles.sectionTitle}>Made for you</Text>
        <FlatList
          data={FEATURED_PLAYLISTS.slice(0, 2)} // Reuse some of the mock data
          renderItem={renderFeaturedItem}
          keyExtractor={(item) => `made-for-you-${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredList}
        />

        {/* Bottom padding to ensure content is visible above mini player */}
        <View style={styles.bottomPadding} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  scrollView: {
    flex: 1,
    padding: spacing.large,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
    marginTop: spacing.medium,
  },
  greeting: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: spacing.medium,
  },
  iconText: {
    fontSize: typography.fontSize.large,
  },
  sectionTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginTop: spacing.large,
    marginBottom: spacing.medium,
  },
  featuredList: {
    paddingRight: spacing.large,
  },
  featuredItem: {
    width: 160,
    marginRight: spacing.large,
  },
  featuredImage: {
    width: 160,
    height: 160,
    borderRadius: borderRadius.small,
    marginBottom: spacing.small,
  },
  featuredTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },
  featuredDescription: {
    fontSize: typography.fontSize.small,
    color: colors.text.secondary,
  },
  recentList: {
    paddingRight: spacing.large,
  },
  recentItem: {
    width: 100,
    marginRight: spacing.large,
  },
  recentImage: {
    width: 100,
    height: 100,
    borderRadius: borderRadius.small,
    marginBottom: spacing.small,
  },
  recentTitle: {
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
  },
  bottomPadding: {
    height: 80, // Height for mini player + extra padding
  },
});

export default HomeScreen;

