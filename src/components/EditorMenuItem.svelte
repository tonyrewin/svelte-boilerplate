<script lang="ts">
  import Icon from "./Icon.svelte";
  export let icon: string;
  export let title: string;
  export let action: Function;
  export let isActive: Function;
</script>

<button
  class="menu-item"
  class:is-active={isActive && isActive()}
  on:click={() => action()}
>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>{title}</label>
  <Icon {icon} />
</button>

<style lang="scss" scoped>
  .menu-item {
    width: 1.75rem;
    height: 1.75rem;
    color: #0d0d0d;
    border: none;
    background-color: transparent;
    border-radius: 0.4rem;
    padding: 0.25rem;
    margin-right: 0.25rem;
    &.is-active,
    &:hover {
      color: #fff;
      background-color: #0d0d0d;
    }
  }
</style>
