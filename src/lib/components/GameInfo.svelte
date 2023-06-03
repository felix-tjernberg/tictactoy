<script lang="ts">
    export let playerOne: string
    export let playerTwo: string
    export let playerTurn: string
</script>

<h1>{playerOne} vs {playerTwo}</h1>
<p>{playerTurn === 'x' ? playerOne : playerTwo}'s turn using {playerTurn}</p>
