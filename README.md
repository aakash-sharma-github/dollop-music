# Music Streaming App

A Spotify-like music streaming application built with React Native, allowing users to browse music, create playlists, and enjoy seamless playback across their devices.

## Project Overview

This application provides a modern music streaming experience with a sleek, dark-themed UI inspired by Spotify. It features user authentication, music browsing by categories, search functionality, library management, and a full-featured music player with background playback capabilities.

## Features

### Authentication
- User login and signup
- Password recovery flow
- Persistent authentication state

### Music Discovery
- Home screen with featured playlists and recommendations
- Browse categories and genres
- Search functionality for tracks, artists, albums, and playlists

### Library Management
- View and manage saved playlists
- Browse recently played content
- Filter library content by type (playlists, artists, albums)

### Playback
- Full-featured audio player with play, pause, skip controls
- Mini-player accessible from anywhere in the app
- Background audio playback
- Progress tracking and seeking
- Queue management

### UI/UX
- Dark theme with Spotify-inspired color palette
- Responsive and intuitive navigation
- Smooth transitions and animations

## Project Structure

```
/src
  /assets            # Images, fonts, and other static assets
  /components        # Reusable UI components
    /player          # Player-related components
  /navigation        # Navigation configuration
  /redux             # Redux state management
    /slices          # Redux slices for different features
  /screens           # App screens
    /auth            # Authentication screens
    /main            # Main app screens
  /services          # API and service integrations
  /utils             # Utility functions and constants
    theme.ts         # App theming and styling constants
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or newer)
- npm or yarn
- React Native development environment set up ([React Native Environment Setup](https://reactnative.dev/docs/environment-setup))

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/aakash-sharma-github/dollop-music
   cd music-app
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Install pods for iOS (if developing for iOS):
   ```
   cd ios && pod install && cd ..
   ```

### Running the App

#### For Android:
```
npx react-native run-android
```

#### For iOS:
```
npx react-native run-ios
```

## Technologies Used

- **React Native**: Core framework for building the mobile application
- **TypeScript**: For type-safe code
- **Redux Toolkit**: State management
- **React Navigation**: Navigation management
- **React Native Track Player**: Audio playback functionality
- **Firebase Authentication**: User authentication (planned for implementation)

## Next Steps

### Immediate Enhancements
- Connect to a real music API (Spotify API, Deezer, etc.)
- Implement real authentication with Firebase
- Add offline mode with downloaded tracks
- Enhance player with visualizations and lyrics

### Future Features
- Social features (sharing, following users)
- Personalized recommendations using machine learning
- Podcast support
- User profile customization
- Cross-device synchronization
- Smart playlists based on listening habits
- Equalization and audio settings

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
