
<script lang="ts">
    import { fade } from "svelte/transition";
    import IntersectionObserver from "$lib/components/IntersectionObserver.svelte";
    import BackgroundHighlight from '$lib/media/dark-gradient-highlight.png'


    let narray = [1,2,3,4,5,6,7,8,9]
</script>

<picture class="absolute justify-end top-0 -z-0">
    <img class="w-screen h-screen object-cover" src={BackgroundHighlight} alt="backgroundhighlight" decoding="async">
</picture>

<main class="flex flex-col">
    <section id="hero" class="flex justify-center">
        <div class="container min-h-[80vh] mb-3 grid grid-cols-1 sm:grid-cols-2 bg-slate-900/50  mx-3 p-6 md:px-6 rounded-3xl">
            
            <h1 class="text-3xl" in:fade="{{delay:100,duration:1000}}">Benedict G S</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    <section id="brag" class="flex justify-center ">
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">brag icon</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
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
    
    
</main>
