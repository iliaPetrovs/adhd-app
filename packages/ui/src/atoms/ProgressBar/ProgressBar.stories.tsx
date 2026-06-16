import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar } from './ProgressBar';
import { Button3D } from '../Button3D/Button3D';

const meta: Meta<typeof ProgressBar> = {
  title: 'Atoms/ProgressBar',
  component: ProgressBar,
  args: { progress: 0.4 },
  argTypes: {
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    height: { control: { type: 'range', min: 4, max: 24, step: 2 } },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Controlled: Story = {};

export const Animated: Story = {
  render: () => {
    const [p, setP] = useState(0);
    return (
      <View style={styles.col}>
        <ProgressBar progress={p} />
        <Button3D onPress={() => setP((v) => Math.min(v + 0.2, 1))}>
          +20%
        </Button3D>
        <Button3D onPress={() => setP(0)}>Reset</Button3D>
      </View>
    );
  },
};

const styles = StyleSheet.create({
  col: { gap: 16 },
});
