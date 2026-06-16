import React from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import * as Haptics from 'expo-haptics';
import { colors, radii, springs } from '../../theme/tokens';

interface TactileCheckboxProps {
  checked: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
}

const TICK_DELAY_MS = 40; // spec: 40ms between two micro-ticks

async function fireDualTick() {
  await Haptics.selectionAsync();
  await new Promise<void>((r) => setTimeout(r, TICK_DELAY_MS));
  await Haptics.selectionAsync();
}

export function TactileCheckbox({ checked, onChange, disabled = false }: TactileCheckboxProps) {
  const scale = useSharedValue(1);

  const triggerToggle = () => {
    if (disabled) return;
    fireDualTick();
    onChange(!checked);
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const gesture = Gesture.Tap()
    .onBegin(() => {
      if (disabled) return;
      // Spring outward snap per spec: scale 1.15, mass 1, stiffness 300, damping 15
      scale.value = withSpring(1.15, springs.checkboxToggle, () => {
        scale.value = withSpring(1, springs.checkboxToggle);
      });
    })
    .onEnd(() => {
      runOnJS(triggerToggle)();
    });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.box, checked && styles.checked, disabled && styles.disabled, animatedStyle]}>
        {checked && <View style={styles.checkmark} />}
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 28,
    height: 28,
    borderRadius: radii.sm,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: colors.accentSuccess,
    borderColor: colors.accentSuccess,
  },
  disabled: {
    opacity: 0.4,
  },
  // Simple cross-shaped checkmark using a rotated View
  checkmark: {
    width: 14,
    height: 14,
    borderRadius: 2,
    backgroundColor: '#fff',
    transform: [{ rotate: '45deg' }, { scaleX: 0.5 }],
  },
});
