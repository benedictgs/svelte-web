<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div class="absolute inset-0 z-0 bg-cover w-screen h-screen bg-no-repeat bg-[#0B1120] bg-[url('$lib/media/dark-room-light.webp')]"></div>

<div class="relative flex flex-col justify-center items-center">
    <div class="z-10 flex flex-col items-center text-center lg:mt-20">
        <h1 class="text-7xl mx-10 mt-20 sm:text-9xl  font-lexend drop-shadow-[2px_10px_5px_hsla(200,100%,0%,50%)]">Blog</h1>
        <h2 class="mt-2">yes i write stuff</h2>
        <p class="mx-10 sm:mx-20 my-5 max-w-[75ch] font-light text-stone-200 md:text-xl backdrop-brightness-50 p-5 rounded-lg">This page is a space where I share my thoughts and insights on a variety of topics. From personal experiences to current events and everything in between, I'll be writing about the things that fascinate me, challenge me, and make me curious. Whether you're here to read, learn, or simply pass the time, I hope my words will spark something in you and maybe even start a conversation. So, let's dive in and explore the world together.</p>
    </div>
</div>