<script lang="ts">
  import { onMount } from 'svelte';
  export let delay = 200;
  export let duration = 500;
  export let fly = 'right';
  export let repeat = true;
  let observer: IntersectionObserver;
  let ref: HTMLElement;
  let visible = false;
  onMount(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible = true;
        } else {
          if (repeat) visible = false;
        }
      });
    });
    observer.observe(ref);
    return () => {
      observer?.disconnect();
    };
  });
</script>

<div bind:this={ref} class:visible class={fly} style={`transition-delay: ${delay}ms; transition-duration: ${duration}ms`}>
  <slot />
</div>

<style >
  @media (prefers-reduced-motion: no-preference) {
    .down {
      transform: translateY(-20px);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .up {
      transform: translateY(20px);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .right {
      transform: translateX(-20px);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .left {
      transform: translateX(20px);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .scaleY {
      transform: scaleY(0.01);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .scaleX {
      transform: scaleX(0.01);
      filter: hue-rotate(90deg);
      opacity: 0;
      position: relative;
      transition: all;
      transition-duration: 500ms;
    }
    .visible {
      transform: translateX(0) scaleX(1);
      filter: hue-rotate(0);
      opacity: 1;
    }
  }
</style>