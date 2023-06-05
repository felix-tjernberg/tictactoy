<script lang="ts">
    import PlayField from './PlayField.svelte'

    let gameState: string = 'x---------'
    let playerTurn: string = 'x'

    $: gameState[0] === 'o' ? (playerTurn = 'o') : (playerTurn = 'x')
</script>

<p class="visually-hidden" data-testid="gameState">{gameState}</p>
<PlayField />
