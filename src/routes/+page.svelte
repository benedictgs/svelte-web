
<script lang="ts">
    import { fade } from "svelte/transition";
    import BackgroundHighlight from '$lib/media/dark-gradient-highlight.png';

    import logoAkltg from '$lib/media/logo-akltg-w.png';
    import logoItb from '$lib/media/logo-itb-w-s-p.png';
    import logoJrp from '$lib/media/logo-jrp-bw.png';
    import logoOpensap from '$lib/media/logo-opensap-w.png';
    import logoSuj from '$lib/media/logo-suj-w-s.png';
    import logoUnilever from '$lib/media/logo-unilever.png';

    import ScrollUpButton from '$lib/components/ScrollUpButton.svelte';
	import HeroSection from "$lib/components/page/HeroSection.svelte";

    let y = 0;

    let Logos = [
        {src: logoItb, alt: "logo itb" },
        {src: logoOpensap, alt: "logo opensap" },
        {src: logoSuj, alt: "logo suj" },
        {src: logoUnilever, alt: "logo unilever" },
        {src: logoJrp, alt: "logo john robert power" },
        {src: logoAkltg, alt: "logo akltg" },
    ]

</script>


<svelte:window bind:scrollY={y}/>

<main class="flex flex-col">
    <section class="h-screen flex flex-col items-center">
        <picture class="absolute justify-end top-0 -z-0">
            <img class="w-screen h-screen object-cover" src={BackgroundHighlight} alt="backgroundhighlight" decoding="async">
        </picture>
        <div class="z-10 flex flex-col items-center text-center lg:mt-20">
            <h1 class="text-7xl mx-10 mt-20 sm:text-9xl  font-lexend drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">Hello There</h1>
            <p class="mx-10 sm:mx-20 my-10 max-w-[75ch] font-light text-stone-200 md:text-xl">Welcome to my personal website, where you'll find a collection of my work, interests, and terrible jokes. Take a look around and make yourself at home. </p>
            <a href="#hero" class="bg-slate-950/50 hover:text-lg p-2 drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)] rounded-xl capitalize motion-safe:animate-bounce font-lexend">learn more</a>
        </div>
    </section>
    <HeroSection />
    
    <section id="brag" class="flex justify-center relative">
        <div class="absolute top-0 inset-x-0 h-[37.5rem] [mask-image:linear-gradient(0deg,transparent,black)] bg-[url('$lib/media/one-small-grid.svg')] bg-[center_top_-1px] border-t dark:border-slate-100/5 xl:top-8"></div>
        <div class="w-full lg:max-w-screen-lg  flex flex-col bg-black/30 my-10 mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}" class="text-xl font-semibold">People call this Brag Section</h1>
            <p in:fade="{{delay:600,duration:1000}}" class="text-xs text-slate-600 font-lexend"> but i feel like bragging is narcissistic </p>
            
            <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 gap-5 items-center ">
                {#each Logos as logo}
                    <img src="{logo.src}" alt="{logo.alt}">
                {/each}
            </div>
        </div>
    </section>
    <section id="story" class="flex justify-center ">
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">story</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    <section id="mentor" class="flex justify-center ">
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">Influencial people</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    
    <ScrollUpButton />
</main>



<style>
    /* .grid-template-logo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 2rem;
    } */
</style>