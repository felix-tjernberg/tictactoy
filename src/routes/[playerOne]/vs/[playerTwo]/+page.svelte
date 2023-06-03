<script lang="ts">
    import { page } from '$app/stores'

    const INITIAL_STATE = (Math.random() > 0.5 ? 'x' : 'o') + '---------'

    $: playerOne = $page.params.playerOne
    $: playerTwo = $page.params.playerTwo
    $: gameState = $page.url.searchParams.get('gameState') || INITIAL_STATE
    $: playerTurn = gameState[0] === 'x' ? 'x' : 'o'

    function checkRowForWinner(indexOne: string, indexTwo: string, indexThree: string): string | false {
        if (indexOne === '-' || indexTwo === '-' || indexThree === '-') {
            return false
        }
        if (indexOne === indexTwo && indexTwo === indexThree) {
            return indexOne
        }
        return false
    }

    $: rowOne = checkRowForWinner(gameState[1], gameState[2], gameState[3])
    $: rowTwo = checkRowForWinner(gameState[4], gameState[5], gameState[6])
    $: rowThree = checkRowForWinner(gameState[7], gameState[8], gameState[9])
    $: rowFour = checkRowForWinner(gameState[1], gameState[4], gameState[7])
    $: rowFive = checkRowForWinner(gameState[2], gameState[5], gameState[8])
    $: rowSix = checkRowForWinner(gameState[3], gameState[6], gameState[9])
    $: rowSeven = checkRowForWinner(gameState[1], gameState[5], gameState[9])
    $: rowEight = checkRowForWinner(gameState[3], gameState[5], gameState[7])
    $: winnerFound = rowOne || rowTwo || rowThree || rowFour || rowFive || rowSix || rowSeven || rowEight
    $: noWinner = !gameState.includes('-')

    function newGameState(squareNumer: number) {
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

<p>{playerOne} vs {playerTwo}<br />{playerTurn === 'x' ? playerOne : playerTwo}'s turn using {playerTurn}</p>
{#if winnerFound || noWinner}
    <form method="GET">
        {#if winnerFound}
            <h1>{winnerFound === 'x' ? playerOne : playerTwo} wins!</h1>
        {:else}
            <h1>It's a tie!</h1>
        {/if}
        <button on:click={() => (gameState = INITIAL_STATE)} name="gameState" value={INITIAL_STATE}>Play again</button>
    </form>
{:else}
    <form method="GET" on:submit|preventDefault>
        {#each [1, 2, 3, 4, 5, 6, 7, 8, 9] as squareNumber}
            <button
                disabled={gameState[squareNumber] !== '-'}
                name="gameState"
                on:click={() => (gameState = newGameState(squareNumber))}
                value={newGameState(squareNumber)}>
                <!-- TODO: add visually hidden language and make visual value be aria ignore with a span -->
                {gameState[squareNumber]}
            </button>
        {/each}
    </form>
{/if}

<style>
    form {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        width: 100%;
        height: 100%;
    }
</style>
