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
  import Create from './pages/Create.svelte'
  import Search from './pages/Search.svelte'
  import Login from './pages/Login.svelte'
  import Messages from './pages/Messages.svelte'
  // import Forbidden from './pages/Forbidden.svelte'
  import Article from './pages/Article.svelte'

  let component
  let props = {}
  // let isAuthorized = false

  initLocalizationContext()

  const routes = {
    '/': { component: Home, caption: 'zine' },
    '/feed': { component: Feed, caption: 'feed' },
    '/community': { component: Community, caption: 'community' }, // shout id
    '/forum': { component: Forum, caption: 'forum' }, // your messages
    '/create': { component: Create, caption: 'create', auth: true },
    '/messages': { component: Messages, caption: 'messages', auth: true },
    '/search': { component: Search, caption: 'search' },
    '/login': { component: Login, caption: 'login' },
    '/id/:id': { component: Article },
  }

  $: component = routes[$path].component || NotFound

  // TODO: auth ui

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
