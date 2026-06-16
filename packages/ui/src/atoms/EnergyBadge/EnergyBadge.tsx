import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, radii, spacing, typography } from '../../theme/tokens';

type EnergyLevel = 'LOW' | 'MEDIUM' | 'HIGH';

interface EnergyBadgeProps {
  level: EnergyLevel;
}

const BADGE_CONFIG: Record<EnergyLevel, { label: string; bg: string; text: string }> = {
  LOW: { label: 'Low Energy', bg: colors.badgeLow, text: '#94a3b8' },
  MEDIUM: { label: 'Medium Energy', bg: '#422006', text: colors.badgeMedium },
  HIGH: { label: 'High Energy', bg: '#4c0519', text: '#fb7185' },
};

export function EnergyBadge({ level }: EnergyBadgeProps) {
  const config = BADGE_CONFIG[level];
  return (
    <View style={[styles.badge, { backgroundColor: config.bg }]}>
      <Text style={[styles.label, { color: config.text }]}>{config.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: radii.full,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: typography.sizeSm,
    fontWeight: typography.weightMedium,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
