<script lang="ts">

	import ScrollShow from '$lib/components/ScrollShow.svelte';
	import StoryCard from "$lib/components/StoryCard.svelte";
    import motoris from '$lib/media/motoris-product.jpg';
    import globalcoco from '$lib/media/coco-factory.webp';
    import refinedSugar from '$lib/media/process-intern.webp';

    export let id:string = 'story';
    
</script>

<section id={id} class="flex flex-col items-center mx-3 my-12 sm:my-20">
        
    <ScrollShow fly="up">
        <div class="justify-self-center flex flex-col items-center mb-20 animate-bounce">
            <h1 class="font-lexend text-3xl text-center"><span class="text-orange-300">Journey</span> up today</h1>
            <div class=" content-center py-1 px-10 bg-slate-600 rounded-full" />
        </div>
        
    </ScrollShow>
    
    <div class="w-full lg:max-w-screen-lg  grid [grid-template-columns:_3rem_repeat(2,1fr)_3rem]  place-items-center ">
        
        <div class="w-full col-span-3">

            <ScrollShow >
                <StoryCard alternate={true} year="2022" journey="motoris" imgSrc={motoris} summary="Automotive accessories e-commerce merchant"></StoryCard>
            </ScrollShow>
        </div>
        
        <div class="w-full h-full ">
            <ScrollShow fly="scaleY" duration={1000}>
                <div  class=" mx-[1.5rem] my-[1rem] h-[20rem] p-1 bg-orange-200  rounded-full "> </div>
            </ScrollShow>
        </div>
        <div class="row-start-2 col-span-4 w-full">
            <ScrollShow fly="scaleX">
                <div  class="my-[1.5rem] mx-[3rem] p-1 rounded-full bg-pink-300 "></div>
            </ScrollShow>
        </div>
        <div class="w-full h-full ">
            <ScrollShow fly="scaleY">
                <div  class="ml-[1rem] mr-[1.5rem] my-[1rem] h-[20rem] p-1 bg-cyan-200  rounded-full "> </div>
            </ScrollShow>
        </div>
        <div class="w-full col-span-3">
            <ScrollShow fly="left">
                
                <StoryCard  year="2020" journey="globalcoco" imgSrc={globalcoco} summary="Chief Marketing Officer of coconut export startup">
                    
                </StoryCard>
            </ScrollShow>
        </div>
        <div class="row-start-4 col-span-4 w-full ">
            <ScrollShow fly="scaleX">
                <div  class="my-[1.5rem] mx-[3rem] p-1  rounded-full bg-green-300 "></div>
            </ScrollShow>
            
        </div>
        
        
        <div class="w-full col-span-3">
            <ScrollShow fly="right">
                <StoryCard alternate={true} year="2018" journey="refined sugar" imgSrc={refinedSugar} summary="Process Management Intern">

                </StoryCard>
            </ScrollShow>
        </div>
        
        <div class="w-full h-full col-start-4 row-start-5">
            <ScrollShow fly="scaleY">
                <div  class=" mx-[1.5rem] my-[1rem] h-[20rem] p-1 bg-purple-400  rounded-full "> </div>
            </ScrollShow>
        </div>
        
        <div class="w-full col-span-4 hidden">
            <ScrollShow fly="up">
                <a href="/resume">
                    <div class=" w-full h-[8rem] grid overflow-hidden  bg-black/10  p-6 md:px-6 rounded-3xl animate-pulse border-4 border-black/30">
                        <h2 class="text-3xl place-self-center font-lexend">learn more...</h2>
                    </div>    
                </a>
            </ScrollShow>
        </div>
        
    </div>
</section>