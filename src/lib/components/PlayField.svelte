<script lang="ts">
    export let gameState: string
    export let playerTurn: string

    function updateGameState(squareNumer: number) {
        // player turn is the first character
        // then the gameState is sliced from the second character to the square number
        // then the player turn is added
        // then the gameState is sliced from the square number + 1 to the end
        // then all of that is concatenated together
        return (
            (playerTurn === 'x' ? 'o' : 'x') +
            gameState.slice(1, squareNumer) +
            playerTurn +
            gameState.slice(squareNumer + 1)
        )
    }
</script>

<form method="GET" on:submit|preventDefault>
    {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as squareNumber}
        <button
            disabled={gameState[squareNumber] !== '-'}
            name="gameState"
            on:click={() => (gameState = updateGameState(squareNumber))}
            value={updateGameState(squareNumber)}>
            <!-- TODO: add visually hidden language and make visual value be aria ignore with a span -->
            {gameState[squareNumber]}
        </button>
    {/each}
</form>

<style>
    form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        width: 100%;
        height: 100%;
    }
</style>
