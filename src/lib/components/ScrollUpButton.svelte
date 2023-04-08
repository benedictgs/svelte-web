<script lang="ts">
    import arrow from '$lib/media/arrow-up-circle.svg';


    let y: number = 0;

    function scrollUp() {
        window.scroll({
            top:0,
            left:0,
            behavior: "smooth",
        });
    }

</script>

<svelte:window bind:scrollY={y} />

{#if y >= 300}
    <div class="fixed bottom-5 right-5">
        <button on:click={scrollUp} >
            <img class="h-10 w-10"  src={arrow} alt="arrow up button">
        </button>
    </div>
    
{/if}