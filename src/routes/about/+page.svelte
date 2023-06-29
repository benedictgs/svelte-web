<script lang="ts">
    import type { PageData } from './$types';

    import SvelteLogo from '$lib/media/svelte-logo.svg';
    import TypescriptLogo from '$lib/media/typescript-logo.svg';
    import TailwindLogo from '$lib/media/tailwind-logo.svg';
    import GithubLogo from '$lib/media/github-logo.svg';
    
    export let data: PageData;

    let Logos = [
        {src:SvelteLogo, alt:"svelte logo"},
        {src:TypescriptLogo, alt:"Typescript logo"},
        {src:TailwindLogo, alt:"Tailwind logo"},
        {src:GithubLogo, alt:"Github logo"},
    ]

</script>

<svelte:head>
    <title>About this website</title>
</svelte:head>

<div class="absolute inset-0 -z-0 bg-cover bg-center bg-no-repeat bg-[#0B1120] bg-[url('$lib/media/hero-dark.jpg')] blur-3xl"></div>

<div class="flex flex-col justify-center items-center">
    <div class="z-10 flex flex-col items-center text-center">
        <h1 class="text-7xl mx-10  sm:text-9xl  font-lexend drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">About</h1>
        <h2>This Website Tech Stack</h2>
        <p class="mx-10 sm:mx-20 my-5 max-w-[75ch] font-light text-stone-200 md:text-xl">
            Svelte Typescript Tailwind Cloudflare Github </p>
        <div class="grid grid-flow-col gap-3 justify-center items-center">
            {#each Logos as logo}
                <img src={logo.src} alt={logo.alt} width="30" height="30">
            {/each}
        </div>
    </div>
</div>