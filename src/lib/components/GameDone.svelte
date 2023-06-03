<script lang="ts">
    import newGameState from '$utilities/newGameState'

    export let gameState: string
    export let playerOne: string
    export let playerTwo: string
    export let winnerFound: string | false
</script>

<form method="GET" on:submit|preventDefault>
    {#if winnerFound}
        <h1>{winnerFound === 'x' ? playerOne : playerTwo} won!</h1>
    {:else}
        <h1>It's a tie!</h1>
    {/if}
    <button
        on:click={() => {
            gameState = newGameState()
        }}
        name="gameState"
        value={newGameState()}>Play again</button>
</form>
