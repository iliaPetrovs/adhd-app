import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { colors, radii, springs } from '../../theme/tokens';

interface ProgressBarProps {
  progress: number; // 0–1
  height?: number;
}

export function ProgressBar({ progress, height = 8 }: ProgressBarProps) {
  const width = useSharedValue(progress);

  useEffect(() => {
    const clamped = Math.max(0, Math.min(1, progress));
    const delta = clamped - width.value;
    // Overshoot by 5% of delta, then spring back — spec: "interpolate past final by 5% of delta"
    const overshoot = clamped + delta * 0.05;

    width.value = withSpring(overshoot, springs.progressBar, () => {
      width.value = withSpring(clamped, springs.progressBar);
    });
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: `${width.value * 100}%`,
  }));

  return (
    <View style={[styles.track, { height, borderRadius: height / 2 }]}>
      <Animated.View style={[styles.fill, { height, borderRadius: height / 2 }, animatedStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    width: '100%',
    backgroundColor: colors.bgCard,
    overflow: 'hidden',
  },
  fill: {
    backgroundColor: colors.accentSuccess,
    minWidth: 4,
  },
});
