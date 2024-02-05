<script lang="ts">
  import Header from '$lib/Header/index.svelte';
  import '../app.css';
</script>

<Header />

<main class="page text-center my-0 mx-auto p-4">
  <slot />
</main>

<style lang="postcss-scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>