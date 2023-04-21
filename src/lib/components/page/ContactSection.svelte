<script lang="ts">

	import ScrollShow from '../ScrollShow.svelte';

    

    export let id:string = 'contact';
    
    let name:string ;
</script>



<section id={id} class="flex justify-center relative">
    <div class="absolute top-0 inset-x-0 h-[20rem] [mask-image:linear-gradient(0deg,transparent,black)] bg-[url('$lib/media/one-small-grid.svg')] bg-[center_top_-1px] border-t border-slate-100/5 xl:top-8"></div>
    <div class="w-full lg:max-w-screen-lg  flex flex-col bg-black/30 my-10 mx-3 p-6 md:px-6 rounded-3xl">
        <h1  class="text-xl font-semibold animate-pulse">Get in Contact</h1>
        <p  class="text-xs text-slate-400 font-lexend"> Let us pray that i don't get spam from this section </p>
        
        <form class="my-6 z-20" on:submit|preventDefault={()=> alert(`thank you ${name} for contacting me`)}>
            <input type="text" id="name" placeholder="name" required bind:value={name}>
            <input type="email" placeholder="example@email.com" required>
            <input type="submit" >

        </form>
    </div>
</section>

<style>
    input {
        background-color: rgba(0, 0, 0, 0.3);
        border-radius: 0.4rem;
        padding: 0.5rem;
        margin: 0.5rem;
    }
    input[type="submit"]{
        background-color: rgba(200, 200, 200, 0.3);
        border-radius: 0.4rem;
        padding: 0.5rem;
    }
</style>