import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { EnergyBadge } from './EnergyBadge';

const meta: Meta<typeof EnergyBadge> = {
  title: 'Atoms/EnergyBadge',
  component: EnergyBadge,
  argTypes: {
    level: { control: 'select', options: ['LOW', 'MEDIUM', 'HIGH'] },
  },
  args: { level: 'MEDIUM' },
};

export default meta;
type Story = StoryObj<typeof EnergyBadge>;

export const Default: Story = {};

export const AllLevels: Story = {
  render: () => (
    <View style={styles.row}>
      <EnergyBadge level="LOW" />
      <EnergyBadge level="MEDIUM" />
      <EnergyBadge level="HIGH" />
    </View>
  ),
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
});
