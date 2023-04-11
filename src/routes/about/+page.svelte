<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="absolute inset-0 z-0 bg-cover w-screen h-screen bg-no-repeat bg-[#0B1120] bg-[url('$lib/media/hero-dark.jpg')] blur-3xl"></div>

<div class="relative flex flex-col justify-center items-center">
    <div class="z-10 flex flex-col items-center text-center lg:mt-20">
        <h1 class="text-7xl mx-10 mt-20 sm:text-9xl  font-lexend drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">About</h1>
        <h2>This Website Tech Stack</h2>
        <p class="mx-10 sm:mx-20 my-5 max-w-[75ch] font-light text-stone-200 md:text-xl">Svelte Typescript Tailwind React Component Cloudflare Github </p>
    </div>
</div>