import type { Preview } from '@storybook/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { View } from 'react-native';

const preview: Preview = {
  decorators: [
    (Story) => (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: '#0f172a', padding: 24, justifyContent: 'center' }}>
          <Story />
        </View>
      </GestureHandlerRootView>
    ),
  ],
  parameters: {
    controls: { matchers: { color: /(background|color)$/i } },
  },
};

export default preview;
