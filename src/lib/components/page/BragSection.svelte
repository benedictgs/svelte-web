<script lang="ts">
    import { fade } from 'svelte/transition'

    import logoAkltg from '$lib/media/logo-akltg-w.png';
    import logoItb from '$lib/media/logo-itb-w-s-p.png';
    import logoJrp from '$lib/media/logo-jrp-bw.png';
    import logoOpensap from '$lib/media/logo-opensap-w.png';
    import logoSuj from '$lib/media/logo-suj-w-s.png';
    import logoUnilever from '$lib/media/logo-unilever.png';

    let Logos = [
        {src: logoItb, alt: "logo itb" },
        {src: logoOpensap, alt: "logo opensap" },
        {src: logoSuj, alt: "logo suj" },
        {src: logoUnilever, alt: "logo unilever" },
        {src: logoJrp, alt: "logo john robert power" },
        {src: logoAkltg, alt: "logo akltg" },
    ];

    export let id:string = 'brag';
    
</script>

<section id={id} class="flex justify-center relative">
    <div class="absolute top-0 inset-x-0 h-[20rem] [mask-image:linear-gradient(0deg,transparent,black)] bg-[url('$lib/media/one-small-grid.svg')] bg-[center_top_-1px] border-t border-slate-100/5 xl:top-8"></div>
    <div class="w-full lg:max-w-screen-lg  flex flex-col bg-black/30 my-10 mx-3 p-6 md:px-6 rounded-3xl">
        <h1 in:fade="{{delay:100,duration:1000}}" class="text-xl font-semibold">People call this Brag Section</h1>
        <p in:fade="{{delay:600,duration:1000}}" class="text-xs text-slate-400 font-lexend"> i feel like i can't brag about this, although i did it anyway ¯\_(ツ)_/¯ </p>
        
        <div class="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 gap-5 items-center ">
            {#each Logos as logo}
                <img src="{logo.src}" alt="{logo.alt}">
            {/each}
        </div>
    </div>
</section>