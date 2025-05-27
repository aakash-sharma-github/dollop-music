import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // In a real app, you would call an API to send a password reset email
    setIsSubmitted(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Reset your password</Text>
        
        {!isSubmitted ? (
          <>
            <Text style={styles.subtitle}>
              Enter your email address and we'll send you instructions to reset your password.
            </Text>
            
            <Text style={styles.inputLabel}>Email address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor={colors.text.tertiary}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
            
            <TouchableOpacity 
              style={[
                styles.resetButton,
                !email.trim() && styles.resetButtonDisabled
              ]}
              onPress={handleSubmit}
              disabled={!email.trim()}
            >
              <Text style={styles.resetButtonText}>SEND RESET LINK</Text>
            </TouchableOpacity>
          </>
        ) : (
          <View style={styles.successContainer}>
            <Text style={styles.successTitle}>Check your email</Text>
            <Text style={styles.successMessage}>
              We've sent password reset instructions to your email address. Please check your inbox.
            </Text>
            <TouchableOpacity 
              style={styles.backToLoginButton}
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={styles.backToLoginText}>BACK TO LOGIN</Text>
            </TouchableOpacity>
          </View>
        )}
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
  backButton: {
    marginTop: spacing.large,
    marginBottom: spacing.xl,
  },
  backButtonText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.medium,
  },
  contentContainer: {
    flex: 1,
    marginTop: spacing.xl,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.large,
  },
  subtitle: {
    fontSize: typography.fontSize.medium,
    color: colors.text.secondary,
    marginBottom: spacing.xl,
    lineHeight: typography.lineHeight.normal,
  },
  inputLabel: {
    fontSize: typography.fontSize.medium,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.small,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: colors.ui.divider,
    borderRadius: borderRadius.small,
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.medium,
    color: colors.text.primary,
    backgroundColor: colors.background.highlight,
  },
  resetButton: {
    backgroundColor: colors.primary.brand,
    borderRadius: borderRadius.pill,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.medium,
  },
  resetButtonDisabled: {
    backgroundColor: colors.ui.tabInactive,
  },
  resetButtonText: {
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -spacing.xxxl,
  },
  successTitle: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.large,
    textAlign: 'center',
  },
  successMessage: {
    fontSize: typography.fontSize.medium,
    color: colors.text.secondary,
    marginBottom: spacing.xxl,
    textAlign: 'center',
    lineHeight: typography.lineHeight.normal,
  },
  backToLoginButton: {
    backgroundColor: colors.primary.brand,
    borderRadius: borderRadius.pill,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xxl,
  },
  backToLoginText: {
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
});

export default ForgotPasswordScreen;

