<script lang="ts">
    export let src: string | undefined;
    export let alt: string | undefined;
  
    import IntersectionObserver from '$lib/components/IntersectionObserver.svelte'
    import Image from '$lib/components/Image.svelte'
    import { onMount } from 'svelte'

    let nativeLoading = false
    // Determine whether to bypass our intersecting check
    onMount(() => {
    if ('loading' in HTMLImageElement.prototype) {
        nativeLoading = true
    }
    })
  </script>
  
  <IntersectionObserver once={true} let:intersecting={intersecting}>
    {#if intersecting || nativeLoading}
        <Image {alt} {src} />
    {/if}
  </IntersectionObserver>