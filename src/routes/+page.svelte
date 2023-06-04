<script lang="ts">
    export let form
</script>

<form method="POST">
    {#if form?.error}
        <p>{form.error}</p>
    {/if}
    <label>
        player one:
        <input type="text" name="playerOne" id="playerOne" value={form?.playerOne ?? ''} />
    </label>
    <label>
        player two:
        <input type="text" name="playerTwo" id="playerTwo" value={form?.playerTwo ?? ''} />
    </label>
    <button type="submit">Start game</button>
</form>

<style>
    form {
        display: grid;
    }
</style>
