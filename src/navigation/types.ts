import { NavigatorScreenParams } from '@react-navigation/native';

// Auth Stack Parameter List
export type AuthStackParamList = {
  Login: undefined;
  Signup: undefined;
  ForgotPassword: undefined;
};

// Tab Navigator Parameter List
export type TabNavigatorParamList = {
  Home: undefined;
  Search: undefined;
  Library: undefined;
};

// Player Stack Parameter List
export type PlayerStackParamList = {
  Player: {
    trackId?: string;
  };
  Playlist: {
    playlistId: string;
  };
  Artist: {
    artistId: string;
  };
  Album: {
    albumId: string;
  };
};

// Root Navigator Parameter List that includes all the others
export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  Main: NavigatorScreenParams<TabNavigatorParamList>;
  Player: NavigatorScreenParams<PlayerStackParamList>;
};

// Declare custom type for useNavigation hook
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

