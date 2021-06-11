<script lang="ts">
  import type { SvelteComponent } from 'svelte'
  import { getLocalization } from '../i18n'
  import { click, path } from 'svelte-pathfinder'

  interface Route {
    component: SvelteComponent
    caption: string
  }

  export let routes: Route[]

  const { t } = getLocalization()

  const handle = (action: string) => {
    switch (action) {
      case 'login':
        // TODO: implement login
        break
      case 'create':
        // TODO: implement create
        break
      case 'search':
      default:
      // TODO: implement search
    }
  }
</script>

<svelte:window on:click={click} />
<!-- svelte-ignore a11y-missing-attribute -->
<nav>
  <h1>Дискурc</h1>
  <div style="width: 195px;" />
  <div class="route">
    {#each Object.entries(routes) as [p, { caption }]}
      <div>
        <div class="routewrap">
          <div class="routecell">
            <a
              class:selected={$path.toString() === p}
              href={p}
              on:click={() => handle(p)}>{caption}</a
            >
          </div>
        </div>
      </div>
      <div style="width: 4vw;" />
    {/each}
  </div>
</nav>

<style lang="scss">
  nav {
    width: 100%;
    height: 80px;
    background-color: rgba(20.4, 20.4, 20.4, 1);
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    h1 {
      width: 180px;
      height: 80px;
      padding: 8px 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 36px;
      font-weight: 700;
      line-height: 44px;
      text-align: center;
      color: white;
      text-transform: uppercase;
    }

    .route {
      height: 28px;
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: flex-start;

      .routewrap {
        display: inline-flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding-top: 2px;

        .routecell {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;

          a {
            font-size: 15px;
            font-weight: 500;
            line-height: 22px;
            color: white;
          }

          .selected {
            border-bottom: 2px solid #fff;
            padding-bottom: 3px;
          }
        }
      }
    }
  }
</style>
