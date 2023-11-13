import React from 'react'
import type { Preview } from '@storybook/react'
import { theme } from '../src/theme'

import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <MantineProvider theme={theme}>{<Story />}</MantineProvider>,
  ],
}

export default preview
