<script>
  import { onDestroy, onMount } from 'svelte'
  import { path, click } from 'svelte-pathfinder'
  import Nav from './components/Nav.svelte'
  import Home from './pages/Home.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Userlist from './pages/Userlist.svelte'

  let component
  let props = {}
  
  const routes = {
    '/': Home,
    '/users': Userlist,
  }

  $: component = routes[$path] || NotFound
  
  $: if ($path.toString() === '/admin' && ! isAuthorized) {
      $path = '/forbidden';
  }

  onMount(() => {
    console.log('started!')
  })

  onDestroy(() => {
    console.log('bye!')
  })
</script>

<svelte:window on:click={click} />
<header><Nav {routes} /></header>
<main><svelte:component this={component} {...props} /></main>

<style lang="scss">
@import './styles/vars.scss';
</style>
