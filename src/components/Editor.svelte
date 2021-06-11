<script>
  import { Editor } from '@tiptap/core'
  import StarterKit from '@tiptap/starter-kit'
  import Collaboration from '@tiptap/extension-collaboration'
  import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
  import * as Y from 'yjs'
  import { WebsocketProvider } from 'y-websocket'
  import { onMount } from 'svelte'
  import { IndexeddbPersistence } from 'y-indexeddb'

  let element
  const ydoc = new Y.Doc()
  /*
  const provider = new WebsocketProvider(
    "ws://127.0.0.1:1234",
    // "ws://publicws.discours.io",
    ydoc
  )
  */
  onMount(() => {
    // Store the Y document in the browser
    new IndexeddbPersistence('discours.io-public', ydoc)

    new Editor({
      element,
      extensions: [Collaboration, CollaborationCursor, StarterKit],
      content: '<p>Hello World!</p>',
    })
  })
</script>

<div bind:this={element} />
