import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

// Mock data for user's library
const LIBRARY_ITEMS = [
  { id: '1', title: 'Liked Songs', type: 'playlist', count: '147 songs', image: 'https://via.placeholder.com/60', pinned: true },
  { id: '2', title: 'Recently Played', type: 'playlist', count: '25 songs', image: 'https://via.placeholder.com/60', pinned: true },
  { id: '3', title: 'Heavy Metal Classics', type: 'playlist', count: '75 songs', image: 'https://via.placeholder.com/60', pinned: false },
  { id: '4', title: 'Discover Weekly', type: 'playlist', count: '30 songs', image: 'https://via.placeholder.com/60', pinned: false },
  { id: '5', title: 'Chill Hits', type: 'playlist', count: '100 songs', image: 'https://via.placeholder.com/60', pinned: false },
  { id: '6', title: 'Taylor Swift', type: 'artist', count: 'Artist', image: 'https://via.placeholder.com/60', pinned: false },
  { id: '7', title: 'Daily Mix 1', type: 'playlist', count: '50 songs', image: 'https://via.placeholder.com/60', pinned: false },
  { id: '8', title: 'Summer Hits 2025', type: 'playlist', count: '80 songs', image: 'https://via.placeholder.com/60', pinned: false },
];

// Filter options for library content
const FILTER_OPTIONS = ['Playlists', 'Artists', 'Albums', 'Downloaded'];

const LibraryScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [sorting, setSorting] = useState('Recently Added');

  // Filter the library items based on selected filter
  const filteredItems = selectedFilter 
    ? LIBRARY_ITEMS.filter(item => 
        selectedFilter === 'Playlists' && item.type === 'playlist' ||
        selectedFilter === 'Artists' && item.type === 'artist' ||
        selectedFilter === 'Albums' && item.type === 'album' ||
        selectedFilter === 'Downloaded' && item.pinned
      )
    : LIBRARY_ITEMS;

  // Render a single library item
  const renderLibraryItem = ({ item }: { item: typeof LIBRARY_ITEMS[0] }) => (
    <TouchableOpacity 
      style={styles.libraryItem}
      onPress={() => console.log(`Navigate to ${item.title}`)}
    >
      <Image 
        source={{ uri: item.image }} 
        style={[
          styles.itemImage,
          item.type === 'artist' && styles.artistImage
        ]}
      />
      <View style={styles.itemDetails}>
        <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
        <View style={styles.itemSubtitleContainer}>
          {item.pinned && (
            <View style={styles.pinnedBadge}>
              <Text style={styles.pinnedText}>PINNED</Text>
            </View>
          )}
          <Text style={styles.itemType}>
            {item.pinned ? ' • ' : ''}{item.type.charAt(0).toUpperCase() + item.type.slice(1)} • {item.count}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // Render filter options as horizontal scrollable buttons
  const renderFilterOptions = () => (
    <View style={styles.filterContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {FILTER_OPTIONS.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.filterOption,
              selectedFilter === option && styles.filterOptionSelected
            ]}
            onPress={() => setSelectedFilter(selectedFilter === option ? null : option)}
          >
            <Text 
              style={[
                styles.filterText,
                selectedFilter === option && styles.filterTextSelected
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <View style={styles.profileContainer}>
            <View style={styles.profileIcon}>
              <Text style={styles.profileLetter}>A</Text>
            </View>
            <Text style={styles.headerTitle}>Your Library</Text>
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Text style={styles.iconText}>🔍</Text>
          </TouchableOpacity>
        </View>
        
        {/* Filter options */}
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filtersScrollContent}
        >
          {FILTER_OPTIONS.map((option) => (
            <TouchableOpacity
              key={option}
              style={[
                styles.filterOption,
                selectedFilter === option && styles.filterOptionSelected
              ]}
              onPress={() => setSelectedFilter(selectedFilter === option ? null : option)}
            >
              <Text 
                style={[
                  styles.filterText,
                  selectedFilter === option && styles.filterTextSelected
                ]}
              >
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Sorting option */}
      <TouchableOpacity style={styles.sortingContainer}>
        <Text style={styles.sortingText}>Sort by: {sorting}</Text>
        <Text style={styles.sortingIcon}>⬇️</Text>
      </TouchableOpacity>

      {/* Library items list */}
      <FlatList
        data={filteredItems}
        renderItem={renderLibraryItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  header: {
    padding: spacing.large,
    paddingBottom: spacing.small,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 32,
    height: 32,
    borderRadius: borderRadius.circle,
    backgroundColor: colors.background.elevated,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.medium,
  },
  profileLetter: {
    color: colors.text.primary,
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.bold,
  },
  headerTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  searchIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: typography.fontSize.large,
  },
  filtersScrollContent: {
    paddingVertical: spacing.small,
  },
  filterOption: {
    paddingHorizontal: spacing.medium,
    paddingVertical: spacing.small,
    backgroundColor: colors.background.highlight,
    borderRadius: borderRadius.pill,
    marginRight: spacing.medium,
  },
  filterOptionSelected: {
    backgroundColor: colors.text.primary,
  },
  filterText: {
    color: colors.text.primary,
    fontSize: typography.fontSize.small,
    fontWeight: typography.fontWeight.medium,
  },
  filterTextSelected: {
    color: colors.background.base,
  },
  sortingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.large,
    marginBottom: spacing.medium,
  },
  sortingText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.small,
  },
  sortingIcon: {
    fontSize: typography.fontSize.small,
    marginLeft: spacing.small,
  },
  listContent: {
    paddingHorizontal: spacing.large,
    paddingBottom: 80, // Space for mini player
  },
  libraryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.large,
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: borderRadius.small,
    marginRight: spacing.medium,
  },
  artistImage: {
    borderRadius: borderRadius.circle,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },
  itemSubtitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinnedBadge: {
    backgroundColor: colors.background.elevated,
    paddingHorizontal: spacing.small,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.small,
  },
  pinnedText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
  },
  itemType: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.small,
  },
});

export default LibraryScreen;

