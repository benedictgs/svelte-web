<script lang="ts">
    import type { PageData } from './$types';

    import { RenderContent } from '@builder.io/sdk-svelte';
    
    const BUILDER_API_KEY = "30899338d4704c5e9b4ec7b2e3862d48";

    export let data: PageData;
    let content = data.content;
</script>

<main>
  <h1>
    Welcome to your Builder-integrated Svelte app
  </h1>
  <div>Below is your Builder Content:</div>

  {#if content}
    <!-- Render builder content with all required props -->
    <RenderContent
      model="page"
      {content}
      apiKey={BUILDER_API_KEY}
    />
  {:else}
    Content Not Found
  {/if}
  <p> above is from Builder.io </p>
</main>