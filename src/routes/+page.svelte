
<script lang="ts">
    import { fade } from "svelte/transition";
    import BackgroundHighlight from '$lib/media/dark-gradient-highlight.png';

    import ScrollUpButton from '$lib/components/ScrollUpButton.svelte';
	import HeroSection from "$lib/components/page/HeroSection.svelte";
	import BragSection from "$lib/components/page/BragSection.svelte";
	import ScrollShow from "$lib/components/ScrollShow.svelte";
	import StoryCard from "$lib/components/StoryCard.svelte";
	import ContactSection from "$lib/components/page/ContactSection.svelte";
	import StorySection from "$lib/components/page/StorySection.svelte";
	import MentorSection from "$lib/components/page/MentorSection.svelte";

    let y = 0;

</script>


<svelte:window bind:scrollY={y}/>

<main class="flex flex-col overflow-hidden">
    <section class="h-screen max-h-[60rem] flex flex-col items-center">
        <picture class="absolute justify-end top-0 -z-0">
            <img class="w-screen h-screen object-cover" src={BackgroundHighlight} alt="backgroundhighlight" decoding="async">
        </picture>
        <div class="z-10 flex flex-col items-center text-center lg:mt-20 mb-60 xl:mb-80">
            <h1 in:fade="{{delay:500,duration:1000}}" class="text-7xl mx-10 mt-20 sm:text-9xl  font-bebas drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">Hello There</h1>
            <p class="mx-10 sm:mx-20 my-10 max-w-[75ch] font-light text-stone-200 md:text-xl">Welcome to my personal website, where you'll find a collection of my work, interests, and <span class="font-semibold underline decoration-pink-500"> terrible jokes</span>. Take a look around and make yourself at home. </p>
            <a href="#hero" class="bg-slate-100/90 hover:text-lg p-2 drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)] rounded-xl capitalize motion-safe:animate-bounce font-lexend text-neutral-900">get started</a>
        </div>
        
        <div class="absolute top-0 inset-x-0 h-screen max-h-[45rem] [mask-image:linear-gradient(180deg,transparent_30%,black)] bg-[url('$lib/media/one-small-dot.svg')] bg-[center_top_-1px]  xl:top-8"></div>
    </section>
    

    <HeroSection id="hero"/>
    
    <BragSection id="brag"/>
    <StorySection id="section"/>
    <MentorSection id="mentor"/>
    
    <ContactSection id="contact"/>
    
    <ScrollUpButton />
</main>



<style>
    /* .grid-template-logo {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 2rem;
    } */
</style>