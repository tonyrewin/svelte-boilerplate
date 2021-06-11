<script lang="ts">
  import type { Editor } from "@tiptap/core";
  import { getLocalization } from "../i18n";
  import EditorMenuItem from "./EditorMenuItem.svelte";

  export let editor: Editor;
  let icon, title, action, isActive;
  const { t } = getLocalization();

  type MenuItem = {
    icon?: string;
    title?: string;
    action?: Function;
    isActive?: Function;
    divider?: boolean;
  };

  let items: Array<MenuItem> = [
    {
      icon: "bold",
      title: $t("Bold"),
      action: () => editor.chain().focus().toggleBold().run(),
      isActive: () => editor.isActive("bold"),
    },
    {
      icon: "italic",
      title: $t("Italic"),
      action: () => editor.chain().focus().toggleItalic().run(),
      isActive: () => editor.isActive("italic"),
    },
    {
      icon: "strikethrough",
      title: $t("Strike"),
      action: () => editor.chain().focus().toggleStrike().run(),
      isActive: () => editor.isActive("strike"),
    },
    {
      icon: "code-view",
      title: $t("Code"),
      action: () => editor.chain().focus().toggleCode().run(),
      isActive: () => editor.isActive("code"),
    },
    {
      divider: true,
    },
    {
      icon: "h-1",
      title: $t("Heading 1"),
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: () => editor.isActive("heading", { level: 1 }),
    },
    {
      icon: "h-2",
      title: $t("Heading 2"),
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: () => editor.isActive("heading", { level: 2 }),
    },
    {
      icon: "paragraph",
      title: $t("Paragraph"),
      action: () => editor.chain().focus().setParagraph().run(),
      isActive: () => editor.isActive("paragraph"),
    },
    {
      icon: "list-unordered",
      title: $t("Bullet List"),
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("bulletList"),
    },
    {
      icon: "list-ordered",
      title: $t("Ordered List"),
      action: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: () => editor.isActive("orderedList"),
    },
    {
      icon: "list-check-2",
      title: $t("Task List"),
      action: () => editor.chain().focus().toggleBulletList().run(),
      isActive: () => editor.isActive("taskList"),
    },
    {
      icon: "code-box-line",
      title: $t("Code Block"),
      action: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: () => editor.isActive("codeBlock"),
    },
    {
      divider: true,
    },
    {
      icon: "double-quotes-l",
      title: $t("Blockquote"),
      action: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: () => editor.isActive("blockquote"),
    },
    {
      icon: "separator",
      title: $t("Horizontal Rule"),
      action: () => editor.chain().focus().setHorizontalRule().run(),
    },
    {
      divider: true,
    },
    {
      icon: "text-wrap",
      title: $t("Hard Break"),
      action: () => editor.chain().focus().setHardBreak().run(),
    },
    {
      icon: "format-clear",
      title: $t("Clear Format"),
      action: () => editor.chain().focus().clearNodes().unsetAllMarks().run(),
    },
    {
      divider: true,
    },
    {
      icon: "arrow-go-back-line",
      title: $t("Undo"),
      action: () => editor.chain().focus().undo().run(),
    },
    {
      icon: "arrow-go-forward-line",
      title: $t("Redo"),
      action: () => editor.chain().focus().redo().run(),
    },
  ];
</script>

<menu>
  {#each items as item}
    <div>
      {#if item.divider}
        <div class="divider" />
      {:else}
        <EditorMenuItem {icon} {title} {action} {isActive} />
      {/if}
    </div>
  {/each}
</menu>

<style lang="scss" scoped>
  .divider {
    width: 2px;
    height: 1.25rem;
    background-color: rgba(var(--default-color), 0.1);
    margin-left: 0.5rem;
    margin-right: 0.75rem;
  }
</style>
