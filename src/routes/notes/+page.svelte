<script>
    export let data;
</script>

<h1>Notes List</h1>

<ul>
    {#each data.summaries as {slug, title}}
        <li><a href="/notes/{slug}">{title}</a></li>
    {/each}
</ul>