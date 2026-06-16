import type { Meta, StoryObj } from '@storybook/react';
import { Button3D } from './Button3D';

const meta: Meta<typeof Button3D> = {
  title: 'Atoms/Button3D',
  component: Button3D,
  args: {
    onPress: () => console.log('onPress'),
    children: 'Press Me',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Button3D>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true, children: 'Disabled' },
};

export const LongLabel: Story = {
  args: { children: 'Complete Morning Routine' },
};
