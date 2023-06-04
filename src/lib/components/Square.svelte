<script lang="ts">
    export let disabled: boolean
    export let name: string
    export let value: string
    export let label: string
</script>

<button {disabled} {name} on:click {value}>
    <!-- TODO: add visually hidden language and make visual value be aria ignore with a span -->
    {label}
</button>
