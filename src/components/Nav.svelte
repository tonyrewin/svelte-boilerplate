<script lang="ts">
  export let routes
  let links = []
  $: links = Object.entries(routes)
</script>

<nav>
  {#each links as link}
    <span>
      <a href={link[0]}>{link[1].name}</a>
    </span>
  {/each}
</nav>

<style lang="scss">
  header {
    nav {
      span {
        color: var(--default-color);
        margin-right: 2vmin;
      }
    }
  }
</style>
