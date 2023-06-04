<script>
    import { page } from '$app/stores'
</script>

{#if $page.status === 404}
    <h1>This page is not what you are looking for</h1>
    <a href="/">This is not the page I'm looking for</a>
    <iframe
        style="width: 100%; aspect-ratio: 16/9;"
        src="https://www.youtube-nocookie.com/embed/GO_xfR64qSk"
        title="YouTube video player, showing a scene from Star Wars Episode IV: A New Hope, where Obi-Wan Kenobi uses a Jedi mind trick to make a stormtrooper believe that these are not the droids he is looking for"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen />
{:else}
    <h1>Oops that was not supposed to happen...</h1>
    <a href="/">Go back to the first page</a>
{/if}
