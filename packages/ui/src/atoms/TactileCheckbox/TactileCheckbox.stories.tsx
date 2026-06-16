import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';
import { TactileCheckbox } from './TactileCheckbox';
import { colors } from '../../theme/tokens';

const meta: Meta<typeof TactileCheckbox> = {
  title: 'Atoms/TactileCheckbox',
  component: TactileCheckbox,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof TactileCheckbox>;

function StatefulCheckbox({ disabled }: { disabled?: boolean }) {
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.row}>
      <TactileCheckbox checked={checked} onChange={setChecked} disabled={disabled} />
      <Text style={styles.label}>{checked ? 'Completed' : 'Tap to complete'}</Text>
    </View>
  );
}

export const Default: Story = {
  render: () => <StatefulCheckbox />,
};

export const Disabled: Story = {
  render: () => <StatefulCheckbox disabled />,
};

export const PreChecked: Story = {
  render: () => {
    const [checked, setChecked] = useState(true);
    return (
      <View style={styles.row}>
        <TactileCheckbox checked={checked} onChange={setChecked} />
        <Text style={styles.label}>{checked ? 'Done' : 'Undone'}</Text>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  label: { color: colors.textPrimary, fontSize: 16 },
});
