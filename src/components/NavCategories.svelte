<script>
  let links = [
    ['статьи', 'articles'],
    ['литература', 'books'],
    ['галерея', 'gallery'],
    ['музыка', 'music'],
    ['видео', 'video'],
    ['общество', 'society'],
    ['культура', 'culture'],
    ['теории', 'theories'],
    ['спецпроекты', 'special'],
    ['обсуждения', 'discussions'],
  ]
</script>

<section>
  <div style="height: 60px;" />
  <div class="cats">
    {#each links as link}
      <a href={'#' + link[1]}>{link[0]}</a>
      <div class="space" />
    {/each}
  </div>
</section>

<style>
  section {
    min-width: 100%;
    max-width: 1080px;
    height: 60px;
    left: 0;
    top: 0;
  }

  .space {
    width: 29px;
  }

  .cats {
    height: 20px;
    left: 30px;
    position: relative;
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    z-index: 9;
  }

  a,
  a:hover,
  a:link,
  a:visited {
    text-decoration: none;
    font-size: 2vh;
    font-weight: 500;
    line-height: 20px;
    color: black;
  }
</style>
