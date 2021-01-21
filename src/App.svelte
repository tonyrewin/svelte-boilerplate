<script>
  import { onDestroy, onMount } from 'svelte'
  import Navaid from 'navaid'
  import { pages } from './stores/router'
  import Home from './pages/Home.svelte'
  import NotFound from './pages/NotFound.svelte'
  import Userlist from './pages/Userlist.svelte'

  let component
  let props = {}

  const run = (thunk, params) => {
    $pages = [location.pathname, ...$pages]
    props = params || {}
    component = thunk
  }

  const router = Navaid('/')
  router.on('/', () => run(Home))
  router.on('/userlist', () => run(Userlist))
  router.on('/*', () => run(NotFound))
  router.listen()
  onMount(() => console.log('started!'))
  onDestroy(router.unlisten)
</script>

<header>
  <nav>
    <span>
      <a href="/">Home</a>
    </span>
    <span>
      <a href="/userlist">Userlist</a>
    </span>
  </nav>
</header>
<main>
  <svelte:component this={component} {...props} />
</main>

<style>
  header nav span {
    margin-right: 2vmin;
  }
</style>
