import React from 'react';
import { StyleSheet, Text, ViewStyle, TextStyle } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { colors, radii, spacing, typography, springs } from '../../theme/tokens';

interface Button3DProps {
  children: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

const PRESS_DEPTH = 3.5;  // Y-axis translate px — spec: 3–4px
const PRESS_DURATION = 80; // ms — spec: max 80ms ease-out

export function Button3D({ children, onPress, disabled = false, style }: Button3DProps) {
  const translateY = useSharedValue(0);
  const shadowHeight = useSharedValue(4);

  const triggerHaptic = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    shadowOffset: { width: 0, height: shadowHeight.value },
  }));

  const gesture = Gesture.Tap()
    .onBegin(() => {
      if (disabled) return;
      translateY.value = withTiming(PRESS_DEPTH, {
        duration: PRESS_DURATION,
        easing: Easing.out(Easing.ease),
      });
      shadowHeight.value = withTiming(0, {
        duration: PRESS_DURATION,
        easing: Easing.out(Easing.ease),
      });
    })
    .onFinalize((_, success) => {
      translateY.value = withTiming(0, {
        duration: PRESS_DURATION,
        easing: Easing.out(Easing.ease),
      });
      shadowHeight.value = withTiming(4, {
        duration: PRESS_DURATION,
        easing: Easing.out(Easing.ease),
      });
      if (success && !disabled) {
        runOnJS(triggerHaptic)();
        if (onPress) runOnJS(onPress)();
      }
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.button, disabled && styles.disabled, style, animatedStyle]}>
        <Text style={styles.label}>{children}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accentSuccess,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    alignItems: 'center',
    justifyContent: 'center',
    // Static shadow — animated portion handled by animatedStyle
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowRadius: 0,
    elevation: 4,
    borderBottomWidth: 4,
    borderBottomColor: '#059669',
  } as ViewStyle,
  disabled: {
    opacity: 0.5,
  },
  label: {
    color: '#fff',
    fontSize: typography.sizeMd,
    fontWeight: typography.weightBold,
  } as TextStyle,
});
