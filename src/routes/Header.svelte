<script lang="ts">
    import logo from '$lib/media/logo.jpg';
    import sunIcon from '$lib/media/sun.svg';
    import moonIcon from '$lib/media/moon.svg';

    import {time} from '$lib/stores/time';

    const formatter = new Intl.DateTimeFormat('en', {
        hour12:false,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
        });

    function isDaytime() {
        const now = new Date();
        const hours = now.getHours();
        return hours >= 6 && hours < 18;
    }



</script>

<header class="flex justify-center items-center sticky top-0 z-50 ">
    <nav class="flex justify-between items-center w-full lg:max-w-screen-lg backdrop-blur-sm bg-slate-900/40 p-2 m-3 md:p-3 rounded-xl">
        <div class="flex items-center hidden xs:inline-flex">
            <a href="/">
                <img class="max-h-12 rounded-xl" id="logo" src={logo} alt="ben logo website">
            </a>
            <p class="mx-5 w-[5ch] text-base font-extralight">{formatter.format($time)}</p>
            {#if isDaytime()}
                <img src={sunIcon} alt="Sun Icon">
            {:else}
                <img src={moonIcon} alt="Moon Icon">
            {/if}
        </div>
        <ul class="flex justify-center items-center pb-1 font-lexend text-base sm:text-xl">
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a href="/">Home</a>
            </li>
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a href="/blog">Blog</a>
            </li>
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
</header>
