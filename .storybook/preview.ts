import StorybookWrapper from './StorybookWrapper.svelte'
import type { Preview } from '@storybook/svelte'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: { storySort: { order: ['Pages', 'Compositions', 'Components', 'Utilities'] } },
    },
}

export const decorators = [
    (_, story) => ({
        Component: StorybookWrapper,
        props: { context: story.globals },
    }),
]

export default preview
