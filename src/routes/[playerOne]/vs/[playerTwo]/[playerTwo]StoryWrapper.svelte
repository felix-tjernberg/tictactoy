<script lang="ts">
    export let allowJS: boolean = false
</script>

{#if allowJS}
    <iframe src="http://localhost:5173/a/vs/b" title="/[playerOne]/vs/[playerTwo] test" data-testid="iframe" />
{:else}
    <iframe
        src="http://localhost:5173/a/vs/b"
        title="/[playerOne]/vs/[playerTwo] test"
        data-testid="iframe"
        sandbox="allow-forms" />
    <p>Note: iframe is set with sandbox="allow-forms", which turns off JavaScript</p>
{/if}

<style>
    p {
        opacity: 0.666;
        font-style: italic;
        font-size: 0.666em;
    }
</style>
