# tictactoy

## Introduction

This is a sample project to showcase SvelteKit features, how to setup SvelteKit, and how to setup Storybook

## Instructions

### setup repo and sveltekit

1. create github repo
2. clone repo && cd to repo
3. `npm install -g pnpm`
4. `pnpm create svelte@latest`
5. `pnpm install`

### storybook

`pnpm dlx storybook@latest init`

#### Initial config

1. disable telemetry in main.ts

    ```ts
    core: {
        disableTelemetry: true,
    },
    ```

2. disable annoying automatic browsertab open of storybook `"storybook": "storybook dev -p 6006 --no-open",`

3. sort story folders in preview.ts

    ```ts
    options: { storySort: { order: ['Pages', 'Compositions', 'Components', 'Utilities'] } }.
    ```

4. setup importing of our styling for all stories

    1. create component StorybookWrapper.svelte

        ```svelte
        <script lang="ts">
            import '../src/lib/utilities/stylesheets/stylesheets.css'

            export let context: any

            let darkMode: boolean = true

            $: darkMode = context.backgrounds?.value === '#333333' || context.backgrounds?.value === 'transparent'
        </script>

        <div data-dark-mode={darkMode} data-testid="storybook-wrapper">
            <slot />
        </div>
        ```

    2. add decorator to preview.ts

        ```ts
        export const decorators = [
            (_, story) => ({
                Component: StorybookWrapper,
                props: { context: story.globals },
            }),
        ]
        ```

#### addons

1. `pnpm add --save-dev @storybook/addon-a11y`
2. add following to addons in main.test '@storybook/addon-a11y'
3. `pnpm add --save-dev @storybook/jest @storybook/test-runner` (takes long time because of install script that runs)
4. add following to package.json

    ```json
    "storybook-build": "storybook build",
    "storybook-clear-cache": "rm -rf node_modules/.cache/storybook",
    "storybook-tests-once": "test-storybook --maxWorkers 2",
    "storybook-tests-watch": "test-storybook --watch --maxWorkers 2", (not really needed)
    ```
