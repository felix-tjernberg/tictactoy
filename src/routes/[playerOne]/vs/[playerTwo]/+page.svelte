<script lang="ts">
    import { page } from '$app/stores'

    import newGameState from '$utilities/newGameState'

    import GameDone from '$components/GameDone.svelte'
    import GameInfo from '$components/GameInfo.svelte'

    import PlayField from '$compositions/PlayField.svelte'

    let gameState = $page.url.searchParams.get('gameState') || newGameState()

    $: playerOne = $page.params.playerOne
    $: playerTwo = $page.params.playerTwo
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
</script>

{#if winnerFound || noWinner}
    <GameDone bind:gameState {playerOne} {playerTwo} {winnerFound} />
{:else}
    <GameInfo {playerOne} {playerTwo} {playerTurn} />
    <PlayField bind:gameState {playerTurn} />
{/if}
