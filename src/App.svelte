<script>
  import { onDestroy, onMount } from 'svelte'
  import { path, click } from 'svelte-pathfinder'
  import NavHeader from './components/NavHeader.svelte'
  import { initLocalizationContext } from './i18n'
  import Home from './pages/Home.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Forum from './pages/Forum.svelte'
  import Community from './pages/Community.svelte'
  import Feed from './pages/Feed.svelte'

  let component
  let props = {}
  let isAuthorized = false

  initLocalizationContext()

  const routes = {
    '/': { component: Home, caption: 'zine' },
    '/feed': { component: Feed, caption: 'feed' },
    '/community': { component: Community, caption: 'community' }, // shout id
    '/forum': { component: Forum, caption: 'forum' }, // your messages
  }

  $: component = routes[$path].component || NotFound

  $: if ($path.toString() === '/admin' && !isAuthorized) {
    $path = '/forbidden'
  }

  onMount(() => {
    console.log('started!')
  })

  onDestroy(() => {
    console.log('bye!')
  })
</script>

<svelte:window on:click={click} />
<header><NavHeader {routes} /></header>
<main><svelte:component this={component} {...props} /></main>

<style lang="scss" global>
  @import 'styles/init.scss';
</style>
