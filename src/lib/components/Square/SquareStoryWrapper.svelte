<script lang="ts">
    import { FUNCTION_TEST_STRING } from './FUNCTION_TEST_STRING'
    import Square from './Square.svelte'

    export let label: string | undefined = undefined
    export let disabled: boolean = false
    export let name: string | undefined = undefined
    export let value: string | undefined = undefined

    export let functionTest: boolean = false
</script>

{#if functionTest}
    <Square {disabled} {label} on:click={() => console.log(FUNCTION_TEST_STRING)} />
{:else}
    <Square {disabled} {label} {name} {value} />
{/if}
