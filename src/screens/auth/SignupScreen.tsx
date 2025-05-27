import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors, spacing, typography, borderRadius } from '../../utils/theme';

const SignupScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Create Account</Text>
        <Text style={styles.subHeaderText}>Sign up to start listening</Text>
      </View>
      
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>What's your email?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor={colors.text.tertiary}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.inputLabel}>Create a password</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          placeholderTextColor={colors.text.tertiary}
          secureTextEntry
        />
        
        <Text style={styles.inputLabel}>What should we call you?</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a profile name"
          placeholderTextColor={colors.text.tertiary}
        />
        
        <Text style={styles.termsText}>
          By signing up, you agree to our {' '}
          <Text style={styles.termsLink}>Terms of Service</Text> and {' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>.
        </Text>
        
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>SIGN UP</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.loginContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>Already have an account? </Text>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.base,
  },
  contentContainer: {
    padding: spacing.large,
  },
  headerContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.xl,
  },
  headerText: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.small,
  },
  subHeaderText: {
    fontSize: typography.fontSize.medium,
    color: colors.text.secondary,
  },
  formContainer: {
    marginTop: spacing.large,
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
    marginBottom: spacing.large,
    paddingHorizontal: spacing.medium,
    color: colors.text.primary,
    backgroundColor: colors.background.highlight,
  },
  termsText: {
    fontSize: typography.fontSize.small,
    color: colors.text.secondary,
    marginBottom: spacing.xl,
    lineHeight: typography.lineHeight.normal,
  },
  termsLink: {
    color: colors.primary.brand,
    textDecorationLine: 'underline',
  },
  signupButton: {
    backgroundColor: colors.primary.brand,
    borderRadius: borderRadius.pill,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  signupButtonText: {
    color: colors.text.inverse,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: spacing.large,
    marginBottom: spacing.xxl,
  },
  loginText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.medium,
  },
  loginButtonText: {
    color: colors.primary.brand,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.medium,
  },
});

export default SignupScreen;

