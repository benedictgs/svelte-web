<script lang="ts">
    import logo from '$lib/media/logo.jpeg';
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

<header class="flex justify-center items-center sticky top-0 z-10 ">
    <nav class="flex justify-between items-center w-full lg:max-w-screen-lg backdrop-blur-sm bg-slate-900/40 p-2 m-3 md:p-3 rounded-xl">
        <div class="flex items-center">
            <a href="/">
                <img class="max-h-12 rounded-xl" id="logo" src={logo} alt="ben logo website">
            </a>
            <p class="mx-5 w-[5ch] text-base font-extralight">{formatter.format($time)}</p>
            {#if isDaytime()}
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Environment / Sun">
                        <path id="Vector" d="M12 4V2M12 20V22M6.41421 6.41421L5 5M17.728 17.728L19.1422 19.1422M4 12H2M20 12H22M17.7285 6.41421L19.1427 5M6.4147 17.728L5.00049 19.1422M12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            {:else}
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Environment / Moon">
                        <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
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


<style>
/*     
    ul {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
    }

    li {
        position: relative;
    }

    nav a {
        padding: 0 0.5em;
    } */
</style>
