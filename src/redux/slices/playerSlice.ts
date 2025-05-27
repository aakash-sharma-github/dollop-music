import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Track {
  id: string;
  title: string;
  artist: string;
  artwork: string;
  url: string;
  duration: number;
  album?: string;
}

export type PlaybackState = 'playing' | 'paused' | 'buffering' | 'stopped' | 'loading';

interface PlayerState {
  currentTrack: Track | null;
  queue: Track[];
  playbackState: PlaybackState;
  isShuffled: boolean;
  repeatMode: 'off' | 'track' | 'queue';
  progress: number;
  duration: number;
  volume: number;
  isMinimized: boolean;
}

// Mock tracks for the prototype
const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    artwork: 'https://via.placeholder.com/300',
    url: 'https://example.com/track1.mp3',
    duration: 203,
    album: 'After Hours'
  },
  {
    id: '2',
    title: 'Dance Monkey',
    artist: 'Tones and I',
    artwork: 'https://via.placeholder.com/300',
    url: 'https://example.com/track2.mp3',
    duration: 210,
    album: 'The Kids Are Coming'
  },
  {
    id: '3',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    artwork: 'https://via.placeholder.com/300',
    url: 'https://example.com/track3.mp3',
    duration: 174,
    album: 'Fine Line'
  },
  {
    id: '4',
    title: 'Don\'t Start Now',
    artist: 'Dua Lipa',
    artwork: 'https://via.placeholder.com/300',
    url: 'https://example.com/track4.mp3',
    duration: 183,
    album: 'Future Nostalgia'
  },
  {
    id: '5',
    title: 'Circles',
    artist: 'Post Malone',
    artwork: 'https://via.placeholder.com/300',
    url: 'https://example.com/track5.mp3',
    duration: 215,
    album: 'Hollywood\'s Bleeding'
  }
];

const initialState: PlayerState = {
  // Start with a default track for the prototype
  currentTrack: mockTracks[0],
  queue: mockTracks.slice(1),
  playbackState: 'paused',
  isShuffled: false,
  repeatMode: 'off',
  progress: 0,
  duration: mockTracks[0].duration,
  volume: 1.0,
  isMinimized: true,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
      state.progress = 0;
      state.duration = action.payload.duration;
    },
    setQueue: (state, action: PayloadAction<Track[]>) => {
      state.queue = action.payload;
    },
    addToQueue: (state, action: PayloadAction<Track>) => {
      state.queue.push(action.payload);
    },
    playTrack: (state) => {
      state.playbackState = 'playing';
    },
    pauseTrack: (state) => {
      state.playbackState = 'paused';
    },
    stopTrack: (state) => {
      state.playbackState = 'stopped';
      state.progress = 0;
    },
    togglePlayPause: (state) => {
      if (state.playbackState === 'playing') {
        state.playbackState = 'paused';
      } else if (state.playbackState === 'paused' || state.playbackState === 'stopped') {
        state.playbackState = 'playing';
      }
    },
    updateProgress: (state, action: PayloadAction<number>) => {
      state.progress = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    toggleShuffle: (state) => {
      state.isShuffled = !state.isShuffled;
    },
    setRepeatMode: (state, action: PayloadAction<'off' | 'track' | 'queue'>) => {
      state.repeatMode = action.payload;
    },
    togglePlayerSize: (state) => {
      state.isMinimized = !state.isMinimized;
    },
    nextTrack: (state) => {
      // In a real implementation, this would be handled by a thunk or saga
      // to actually change the track and then update the current track
      // Here we just mark the state to indicate we want to play the next track
      state.playbackState = 'loading';
    },
    previousTrack: (state) => {
      // Similar to nextTrack, this would be handled by a thunk or saga
      state.playbackState = 'loading';
    },
  },
});

export const {
  setCurrentTrack,
  setQueue,
  addToQueue,
  playTrack,
  pauseTrack,
  stopTrack,
  togglePlayPause,
  updateProgress,
  setVolume,
  toggleShuffle,
  setRepeatMode,
  togglePlayerSize,
  nextTrack,
  previousTrack,
} = playerSlice.actions;

export default playerSlice.reducer;

