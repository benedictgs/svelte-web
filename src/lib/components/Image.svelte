<script lang="ts">
    import { onMount } from 'svelte'

    export let src: string | undefined;
    export let alt: string | undefined;
    
    let loaded = false;
    let thisImage: HTMLImageElement;
  
    onMount(() => {
      thisImage.onload = () => {
        loaded = true;
      }
    }) 
  
  </script>
  
  <style>
    img {
      opacity: 0;
      transition: opacity 1200ms ease-out;
    }
    img.loaded {
      opacity: 1;
    }
  </style>
  
  <img loading="lazy" {src} {alt} class:loaded bind:this={thisImage}/>