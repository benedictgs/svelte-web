<script lang="ts">

	import {clickOutside} from "$lib/click_outside.js";
    import ScrollShow from '../ScrollShow.svelte';

    

    export let id:string = 'mentor';

    let data= [
        {
        name:"Mari Elka Pangestu",
        description:"Indonesia Minister of Tourism and Creative Economy",
        title:"Show the world our identity",
        year:"2014",
        }
    ]

    let grids = [ 1,2,3,4,5,6];
    
    let name="Standing in the shoulder of giants";
    let description = "I am fortunate to meet and learn from inspiring people";
    let title = "click the picture above";

    function setCaption(index:number) {
        name = data[index].name;
        description = data[index].description;
        title = `" ${data[index].title} " - ${data[index].year}` ;
    }

    function resetCaption() {
        name="Standing in the shoulder of giants";
        description = "I am fortunate to meet and learn from inspiring people";
        title = "click the picture above";
    }


</script>



<section id={id} class="flex justify-center mt-20 pb-3 bg-[linear-gradient(0,rgba(0,0,0,0.6),transparent)] overflow-hidden">
    <div class="w-full lg:max-w-screen-lg h-[40rem] grid  grid-cols-2 sm:grid-cols-3  mx-3 p-6  rounded-3xl relative"
    use:clickOutside on:outclick={resetCaption}
    >
        <div class=" col-span-2 sm:col-span-3">

            <ScrollShow fly="right" duration={1000}>
                <h1 class="text-6xl font-bebas ">Influencial people</h1>
            </ScrollShow>
        </div>

        {#each grids as grid,i}
        <img class="object-cover h-full w-full" src="https://picsum.photos/id/{grid*13}/200/200" alt="" on:click={()=>setCaption(i)}>
        {/each}
        
        
            
        
        <div class="bg-gradient-to-t from-black to-transparent col-span-2 sm:col-span-3 p-6 rounded-b-xl"> 
            <h3 class="capitalize font-bold my-1 ">{name}</h3>
            <p class=" text-zinc-500 text-xs font-lexend ">{description}</p>
            <p class=" text-zinc-400 font-serif text-xs text-end mt-3">{title}</p>
        </div>
    </div>
</section>