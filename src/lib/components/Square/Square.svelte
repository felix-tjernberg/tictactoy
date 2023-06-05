<script lang="ts">
    export let disabled: boolean = false
    export let name: string | undefined = undefined
    export let value: string | undefined = undefined
    export let label: string | undefined = undefined
</script>

<button {disabled} {name} on:click {value}>
    <!-- TODO: add visually hidden language and make visual value be aria ignore with a span -->
    {label}
</button>
