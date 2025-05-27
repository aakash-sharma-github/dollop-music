import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';
import { RootState } from '../../redux/store';
import { togglePlayPause, nextTrack } from '../../redux/slices/playerSlice';

const MiniPlayer: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  // Get player state from Redux
  const currentTrack = useSelector((state: RootState) => state.player.currentTrack);
  const isPlaying = useSelector((state: RootState) => state.player.playbackState === 'playing');
  const progress = useSelector((state: RootState) => state.player.progress);
  const duration = useSelector((state: RootState) => state.player.duration);
  
  // Calculate progress percentage
  const progressPercentage = duration > 0 ? (progress / duration) * 100 : 0;

  const handlePlayPause = () => {
    dispatch(togglePlayPause());
  };

  const handleNext = () => {
    dispatch(nextTrack());
  };

  const handlePress = () => {
    // In a real app, this would navigate to the full player screen
    console.log('Navigate to full player');
  };

  // If no track is playing, don't render the mini player
  if (!currentTrack) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* Progress bar at the top of the mini player */}
      <View style={styles.progressContainer}>
        <View style={[styles.progressBar, { width: `${progressPercentage}%` }]} />
      </View>

      <Pressable style={styles.content} onPress={handlePress}>
        {/* Track info */}
        <View style={styles.trackInfoContainer}>
          <Image source={{ uri: currentTrack.artwork }} style={styles.artwork} />
          <View style={styles.textContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {currentTrack.title}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {currentTrack.artist}
            </Text>
          </View>
        </View>

        {/* Controls */}
        <View style={styles.controls}>
          <TouchableOpacity 
            style={styles.playButton} 
            onPress={handlePlayPause}
          >
            <Text style={styles.playIcon}>
              {isPlaying ? '⏸️' : '▶️'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNext}
          >
            <Text style={styles.nextIcon}>⏭️</Text>
          </TouchableOpacity>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background.elevated,
    borderTopWidth: 1,
    borderTopColor: colors.ui.divider,
    height: 64,
  },
  progressContainer: {
    height: 2,
    width: '100%',
    backgroundColor: colors.ui.progressEmpty,
  },
  progressBar: {
    height: 2,
    width: '30%', // This would be dynamic based on the track progress
    backgroundColor: colors.ui.progressFilled,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.medium,
  },
  trackInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  artwork: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.small,
    marginRight: spacing.medium,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: colors.text.primary,
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
  },
  artist: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.small,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButton: {
    marginRight: spacing.medium,
  },
  playIcon: {
    fontSize: typography.fontSize.xl,
  },
  nextButton: {},
  nextIcon: {
    fontSize: typography.fontSize.large,
  },
});

export default MiniPlayer;

