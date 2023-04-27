<script lang="ts">

	import {clickOutside} from "$lib/click_outside.js";
    import ScrollShow from '../ScrollShow.svelte';
    import mariElka from '$lib/media/mari-elka-pangestu.webp'
    import johnnyPlate from '$lib/media/johnny-g-plate.webp'
    import chrisGardner from '$lib/media/chris-gardner.webp'
    import datoTahir from '$lib/media/dato-sri-tahir.webp'
    import jamesRiady from '$lib/media/james-riady.webp'
    import hermantoTanoko from '$lib/media/hermanto-tanoko.webp'
    

    export let id:string = 'mentor';

    let data= [
        {
        id:mariElka,
        name:"Mari Elka Pangestu",
        description:"Indonesia Minister of Tourism and Creative Economy",
        insight:"Show the world our identity",
        year:"2014",
        },
        {
        id:johnnyPlate,
        name:"Johnny Gerard Plate",
        description:"Indonesia Minister of Communication and Informatics",
        insight:"Informatics as the foundational future",
        year:"2020",
        },
        {
        id:chrisGardner,
        name:"Chris Gardner",
        description:"Wallstreet Entrepreneur and Writer of 'The Pursuit of Happyness'",
        insight:"Sometimes in life you get a chance to walk the walk",
        year:"2012",
        },
        {
        id:datoTahir,
        name:"Dato Sri Tahir",
        description:"Billionaire, Founder of Mayapada Group",
        insight:"Stand strong and help others",
        year:"2014",
        },
        {
        id:jamesRiady,
        name:"James Riady",
        description:"Chairman of Lippo Group, Finance and Property Magnate",
        insight:"Take your time appropriately",
        year:"2013",
        },
        {
        id:hermantoTanoko,
        name:"Hermanto Tanoko",
        description:"Billionaire, Avian Paint and Cleo ",
        insight:"Clever technology and understanding of business",
        year:"2020",
        },
    ]

    let grids = [ 1,2,3,4,5,6];
    
    let name="Standing in the shoulder of giants";
    let description = "I am fortunate to meet and learn from inspiring people";
    let insight = "click the picture above";

    function setCaption(index:number) {
        name = data[index].name;
        description = data[index].description;
        insight = `" ${data[index].insight} " - ${data[index].year}` ;
    }

    function resetCaption() {
        name="Standing in the shoulder of giants";
        description = "I am fortunate to meet and learn from inspiring people";
        insight = "click the picture above";
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

        {#each data as people,i}
        <img class="object-cover h-full w-full object-top" src="{people.id}" alt="{people.name}" on:click={()=>setCaption(i)}>
        {/each}
        
        
            
        
        <div class="bg-gradient-to-t from-black to-transparent col-span-2 sm:col-span-3 p-6 rounded-b-xl"> 
            <h3 class="capitalize font-bold my-1 ">{name}</h3>
            <p class=" text-zinc-500 text-xs font-lexend ">{description}</p>
            <p class=" text-zinc-400 font-serif text-xs text-end mt-3">{insight}</p>
        </div>
    </div>
</section>