/**
 * Theme configuration for Music Streaming App
 * Inspired by Spotify's color palette and design system
 */

// Color palette
export const colors = {
  // Primary colors
  primary: {
    brand: '#1DB954', // Spotify Green
    dark: '#148A41',
    light: '#1ED760',
  },
  
  // Background colors
  background: {
    base: '#121212', // Main background
    highlight: '#1A1A1A', // Slightly lighter for cards
    elevated: '#282828', // For modals, popups, etc.
    gradient: ['#121212', '#090909'], // For gradient backgrounds
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    tertiary: '#727272',
    disabled: '#535353',
    inverse: '#000000', // For text on light backgrounds
  },
  
  // Status colors
  status: {
    error: '#F15E6C',
    success: '#1DB954',
    warning: '#E7A917',
    info: '#3D91F4',
  },
  
  // Specialized UI colors
  ui: {
    divider: '#292929',
    cardBorder: '#333333',
    tabInactive: '#535353',
    progressEmpty: '#5A5A5A',
    progressFilled: '#1DB954',
    overlay: 'rgba(0, 0, 0, 0.7)',
    shadow: '#000000',
  }
};

// Typography
export const typography = {
  fontFamily: {
    base: 'System', // Will be replaced with specific font per platform
    bold: 'System-Bold',
    medium: 'System-Medium',
  },
  
  fontSize: {
    xs: 10,
    small: 12,
    medium: 14,
    large: 16,
    xl: 18,
    xxl: 22,
    xxxl: 28,
    jumbo: 34,
  },
  
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
  
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  }
};

// Spacing
export const spacing = {
  xxs: 2,
  xs: 4,
  small: 8,
  medium: 12,
  large: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
  jumbo: 64,
};

// Border Radius
export const borderRadius = {
  small: 4,
  medium: 8,
  large: 16,
  pill: 100, // For pill-shaped buttons
  circle: 999, // For circular elements
};

// Shadows
export const shadows = {
  small: {
    shadowColor: colors.ui.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: colors.ui.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  large: {
    shadowColor: colors.ui.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
};

// Screen specific metrics
export const metrics = {
  playerBarHeight: 56,
  miniPlayerHeight: 64,
  tabBarHeight: 56,
  headerHeight: 60,
  buttonHeight: 48,
  inputHeight: 48,
};

// Timing for animations
export const timing = {
  short: 150,
  medium: 300,
  long: 450,
};

// Default theme object that combines all theme elements
export const theme = {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  metrics,
  timing,
};

export default theme;

