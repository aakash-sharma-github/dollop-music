import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Music App</Text>
      </View>
      
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email or Username"
          placeholderTextColor={colors.text.tertiary}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.text.tertiary}
          secureTextEntry
        />
        
        <TouchableOpacity
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        
        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>
        
        <TouchableOpacity
          style={styles.signupContainer}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
    padding: spacing.large,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: spacing.xxxl,
    marginBottom: spacing.xxxl,
  },
  logoText: {
    fontSize: typography.fontSize.jumbo,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary.brand,
  },
  formContainer: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.ui.divider,
    borderRadius: borderRadius.small,
    marginBottom: spacing.large,
    paddingHorizontal: spacing.medium,
    color: colors.text.primary,
    backgroundColor: colors.background.highlight,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: spacing.large,
  },
  forgotPasswordText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.small,
  },
  loginButton: {
    backgroundColor: colors.primary.brand,
    borderRadius: borderRadius.pill,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  loginButtonText: {
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: spacing.xl,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: colors.ui.divider,
  },
  dividerText: {
    color: colors.text.secondary,
    paddingHorizontal: spacing.medium,
    fontSize: typography.fontSize.small,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.xxxl,
  },
  signupText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.medium,
  },
  signupButtonText: {
    color: colors.primary.brand,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
});

export default LoginScreen;

