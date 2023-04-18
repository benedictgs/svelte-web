
<script lang="ts">
    import { fade, fly, scale } from "svelte/transition";
    import BackgroundHighlight from '$lib/media/dark-gradient-highlight.png';

    import ScrollUpButton from '$lib/components/ScrollUpButton.svelte';
	import HeroSection from "$lib/components/page/HeroSection.svelte";
	import BragSection from "$lib/components/page/BragSection.svelte";
	import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";

    let y = 0;

</script>


<svelte:window bind:scrollY={y}/>

<main class="flex flex-col">
    <section class="h-screen max-h-[60rem] flex flex-col items-center">
        <picture class="absolute justify-end top-0 -z-0">
            <img class="w-screen h-screen object-cover" src={BackgroundHighlight} alt="backgroundhighlight" decoding="async">
        </picture>
        <div class="z-10 flex flex-col items-center text-center lg:mt-20 mb-60 xl:mb-80">
            <h1 class="text-7xl mx-10 mt-20 sm:text-9xl  font-lexend drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">Hello There</h1>
            <p class="mx-10 sm:mx-20 my-10 max-w-[75ch] font-light text-stone-200 md:text-xl">Welcome to my personal website, where you'll find a collection of my work, interests, and <span class="font-semibold underline decoration-pink-500"> terrible jokes</span>. Take a look around and make yourself at home. </p>
            <a href="#hero" class="bg-slate-950/50 hover:text-lg p-2 drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)] rounded-xl capitalize motion-safe:animate-bounce font-lexend">learn more</a>
        </div>
        
        <div class="absolute top-0 inset-x-0 h-screen max-h-[45rem] [mask-image:linear-gradient(180deg,transparent,black)] bg-[url('$lib/media/one-small-dot.svg')] bg-[center_top_-1px] border-b border-slate-100/5 xl:top-8"></div>
    </section>
    

    <HeroSection id="hero"/>
    
    <BragSection id="brag"/>
    
    <section id="story" class="flex flex-col items-center mx-3 my-12 sm:my-20">
        <IntersectionObserver let:intersecting>
            {#if intersecting}
            <div class="justify-self-center flex flex-col items-center mb-20 animate-bounce">
                <h1 class="font-lexend text-3xl"><span class="text-orange-300">Journey</span> up today</h1>
                <div in:scale="{{duration:2000}}" class="content-center w-[16rem] max-w-full h-1 bg-cyan-400 rounded-full" />
            </div>

            {:else}
            <div></div>
            {/if}
        </IntersectionObserver>
        <div class="w-full lg:max-w-screen-lg  grid [grid-template-columns:_3rem_repeat(2,1fr)_3rem]  justify-items-center items-center">
            
            <div class="col-span-3 w-full">
                <IntersectionObserver let:intersecting>
                    {#if intersecting}
                    <div in:fly="{{duration:1000, x:-100}}" class=" w-full  h-[40vh] grid grid-cols-2 overflow-hidden  bg-black/50  p-6 md:px-6 rounded-3xl">
                        <h1 in:fade="{{delay:100,duration:1000}}">Motoris 2022</h1>
                        <p in:fade="{{delay:600,duration:1000}}"> Online </p>
                        <div>
                        </div>
                    </div>
                    {:else}
                    <div></div>
                    {/if}
                </IntersectionObserver>
            </div>
            <IntersectionObserver let:intersecting>
                {#if intersecting}
                    <div in:scale="{{duration:2000}}" class="w-2 m-auto bg-orange-200 h-full rounded-full "></div>
                {:else}
                    <div></div>
                {/if}
            </IntersectionObserver>
            <div class="col-span-4 h-full w-full">
            <IntersectionObserver let:intersecting>
                {#if intersecting}
                    <div in:scale="{{duration:2000}}" class="w-[calc(100%-6rem)] h-2 m-10 rounded-full bg-pink-200 "></div>
                {:else}
                    <div></div>
                {/if}
            </IntersectionObserver>
            </div>
            <div class="w-2 col-span-1 bg-cyan-200 h-full rounded-full"></div>
            <IntersectionObserver let:intersecting>
                {#if intersecting}
                <div in:fly="{{duration:1000, x:100}}" class="w-full sm:max-w-screen-sm h-[40vh] grid grid-cols-2 overflow-hidden  bg-black/50  p-6 md:px-6 rounded-3xl justify-self-end">
                    <h1 in:fade="{{delay:100,duration:1000}}">Open SAP 2021</h1>
                    <p in:fade="{{delay:600,duration:1000}}">  Data </p>
                    <div>
                        
                    </div>
                </div>
                
               
                {:else}
                <div></div>
                {/if}
            </IntersectionObserver>
            <div class="mr-[-3rem] w-full sm:max-w-screen-sm h-[40vh] grid grid-cols-2 overflow-hidden  bg-black/50  p-6 md:px-6 rounded-3xl ">
                <h1 in:fade="{{delay:100,duration:1000}}">Open SAP 2021</h1>
                <p in:fade="{{delay:600,duration:1000}}">  Data </p>
                <div>
                    
                </div>
            </div>
            <div></div>
            <div class="w-[calc(100%-6rem)] h-2 m-10 rounded-full col-span-4 bg-teal-300 "></div>
            
            <div class="w-full sm:max-w-screen-sm h-[40vh] grid grid-cols-2 overflow-hidden  bg-black/50  p-6 md:px-6 rounded-3xl justify-self-end">
                <h1 in:fade="{{delay:100,duration:1000}}">Open SAP 2021</h1>
                <p in:fade="{{delay:600,duration:1000}}">  Data </p>
                <div>
                    
                </div>
            </div>
            
        </div>
    </section>
    <section id="mentor" class="flex justify-center mt-20">
        <div class="w-full lg:max-w-screen-lg h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
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