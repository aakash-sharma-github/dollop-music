import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

// Mock data for search categories
const SEARCH_CATEGORIES = [
  { id: '1', title: 'Podcasts', color: '#E13300', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'New Releases', color: '#7358FF', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Charts', color: '#1E3264', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Pop', color: '#148A08', image: 'https://via.placeholder.com/150' },
  { id: '5', title: 'Hip-Hop', color: '#BC5900', image: 'https://via.placeholder.com/150' },
  { id: '6', title: 'Rock', color: '#E91429', image: 'https://via.placeholder.com/150' },
  { id: '7', title: 'Latin', color: '#E1118C', image: 'https://via.placeholder.com/150' },
  { id: '8', title: 'Mood', color: '#B02897', image: 'https://via.placeholder.com/150' },
  { id: '9', title: 'Indie', color: '#8C67AA', image: 'https://via.placeholder.com/150' },
  { id: '10', title: 'Discover', color: '#1E3264', image: 'https://via.placeholder.com/150' },
];

// Mock data for search results
const SEARCH_RESULTS = [
  { id: '1', title: 'Blinding Lights', artist: 'The Weeknd', image: 'https://via.placeholder.com/60', type: 'song' },
  { id: '2', title: 'Adele', artist: 'Artist', image: 'https://via.placeholder.com/60', type: 'artist' },
  { id: '3', title: 'Fine Line', artist: 'Harry Styles', image: 'https://via.placeholder.com/60', type: 'album' },
  { id: '4', title: 'Drake Radio', artist: 'Playlist', image: 'https://via.placeholder.com/60', type: 'playlist' },
  { id: '5', title: 'Watermelon Sugar', artist: 'Harry Styles', image: 'https://via.placeholder.com/60', type: 'song' },
];

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  // Render a single category item
  const renderCategoryItem = ({ item, index }: { item: typeof SEARCH_CATEGORIES[0], index: number }) => (
    <TouchableOpacity 
      style={[styles.categoryItem, { backgroundColor: item.color }]}
      onPress={() => console.log(`Navigate to category ${item.title}`)}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
      <Image 
        source={{ uri: item.image }} 
        style={styles.categoryImage}
      />
    </TouchableOpacity>
  );

  // Render a single search result item
  const renderSearchResult = ({ item }: { item: typeof SEARCH_RESULTS[0] }) => (
    <TouchableOpacity 
      style={styles.resultItem}
      onPress={() => console.log(`Navigate to ${item.type} ${item.title}`)}
    >
      <Image source={{ uri: item.image }} style={styles.resultImage} />
      <View style={styles.resultInfo}>
        <Text style={styles.resultTitle}>{item.title}</Text>
        <View style={styles.resultSubtitleContainer}>
          <Text style={styles.resultType}>{item.type.toUpperCase()}</Text>
          <Text style={styles.resultArtist}> • {item.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Artists, songs, or podcasts"
          placeholderTextColor={colors.text.tertiary}
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            setIsSearching(text.length > 0);
          }}
          onFocus={() => setIsSearching(searchQuery.length > 0)}
        />
      </View>

      {isSearching ? (
        // Search Results
        <FlatList
          data={SEARCH_RESULTS}
          renderItem={renderSearchResult}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.resultsList}
          ListHeaderComponent={
            <Text style={styles.resultsTitle}>Top results</Text>
          }
        />
      ) : (
        // Browse Categories
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Text style={styles.browseTitle}>Browse all</Text>
          <View style={styles.categoriesContainer}>
            {SEARCH_CATEGORIES.map((category, index) => (
              renderCategoryItem({ item: category, index })
            ))}
          </View>
          <View style={styles.bottomPadding} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  searchBarContainer: {
    padding: spacing.large,
    paddingBottom: spacing.medium,
  },
  searchInput: {
    height: 40,
    backgroundColor: colors.background.elevated,
    borderRadius: borderRadius.pill,
    paddingHorizontal: spacing.large,
    color: colors.text.primary,
  },
  scrollView: {
    flex: 1,
    padding: spacing.large,
    paddingTop: 0,
  },
  browseTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.large,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    height: 100,
    borderRadius: borderRadius.small,
    padding: spacing.medium,
    marginBottom: spacing.large,
    overflow: 'hidden',
    position: 'relative',
  },
  categoryTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    zIndex: 1,
  },
  categoryImage: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: -10,
    right: -10,
    transform: [{ rotate: '25deg' }],
  },
  resultsList: {
    padding: spacing.large,
    paddingTop: spacing.small,
  },
  resultsTitle: {
    fontSize: typography.fontSize.large,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.large,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: (item: typeof SEARCH_RESULTS[0]) => item.type === 'artist' ? borderRadius.circle : borderRadius.small,
    marginRight: spacing.medium,
  },
  resultInfo: {
    flex: 1,
  },
  resultTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },
  resultSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resultType: {
    fontSize: typography.fontSize.small,
    color: colors.text.secondary,
    fontWeight: typography.fontWeight.medium,
  },
  resultArtist: {
    fontSize: typography.fontSize.small,
    color: colors.text.secondary,
  },
  bottomPadding: {
    height: 80, // Height for mini player + extra padding
  },
});

export default SearchScreen;

