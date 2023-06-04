<script lang="ts">
    import '../src/lib/utilities/stylesheets/stylesheets.css'

    export let context: any

    let darkMode: boolean = true

    $: darkMode = context.backgrounds?.value === '#333333' || context.backgrounds?.value === 'transparent'
</script>

<div data-dark-mode={darkMode} data-testid="storybook-wrapper">
    <slot />
</div>
