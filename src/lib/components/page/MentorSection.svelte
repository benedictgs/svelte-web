<script lang="ts">

	import ScrollShow from '../ScrollShow.svelte';

    

    export let id:string = 'mentor';
    
</script>



<section id={id} class="flex justify-center mt-20 pb-3 bg-[linear-gradient(0,rgba(0,0,0,0.6),transparent)] overflow-hidden">
    <div class="w-full lg:max-w-screen-lg h-[40rem] grid sm:grid-cols-2  mx-3 p-6 md:px-6 rounded-3xl">
        <ScrollShow fly="right" duration={1000}>
            <h1 class="text-6xl font-bebas ">Influencial people</h1>
        </ScrollShow>
        
        
        <div>
            
        </div>
        <p class=""> Lorem ipsum inventore?</p>
    </div>
</section>