import type { StorybookConfig } from '@storybook/sveltekit'
const config: StorybookConfig = {
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: 'tag',
    },
    framework: {
        name: '@storybook/sveltekit',
        options: {},
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
}
export default config
