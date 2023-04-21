<script lang="ts">
    export let alternate=false;
    export let year="2023";
    export let journey="Growing";
    export let summary="Learning as always";
    export let imgSrc="";
    export let imgAlt="fail to load";
    

    let gridRowAlternate = alternate ? "grid-rows-[3fr_1fr] sm:grid-cols-[3fr_1fr]":"grid-rows-[1fr_3fr] sm:grid-cols-[1fr_3fr]";

</script>

<div class=" w-full h-[20rem]  grid grid-cols-1 {gridRowAlternate}  sm:grid-rows-none gap-2 overflow-hidden  bg-black/30  p-6 md:px-6 rounded-3xl ">
    {#if alternate}
        <div class="bg-gray-600 max-h-[12rem] sm:max-h-full overflow-hidden rounded-lg"> <img class="w-full h-full object-cover" src={imgSrc} alt={imgAlt}></div>
        <div class="flex flex-col ">
            <h1>
                <span class="text-stone-500 text-xl font-mono">{year}-</span>
                <span class="text-gray-300 text-lg font-bold font-lexend capitalize">{journey}</span>
            </h1>
            <p >{summary}</p>

        </div>
    {:else}
        <div class="flex flex-col">
            <h1>
                <span class="text-stone-500 text-xl font-mono">{year}-</span>
                <span class="text-gray-300 text-lg font-bold font-lexend capitalize">{journey}</span>
            </h1>
            <p >{summary}</p>

        </div>
        <div class="bg-gray-600 max-h-[12rem] sm:max-h-full overflow-hidden rounded-lg"> <img class="w-full h-full object-cover" src={imgSrc} alt={imgAlt}></div>
    {/if}
</div>