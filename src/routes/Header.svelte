<script lang="ts">
    import logo from '$lib/media/logo.jpeg'



</script>

<header class="flex justify-center items-center sticky top-0 z-10">
    <nav class="flex justify-between container backdrop-blur-sm bg-slate-900/40 p-2 m-3 md:p-3 rounded-full">
        <a href="/">
            <img class="max-h-12 rounded-full" id="logo" src={logo} alt="ben logo website">
        </a>
        <ul class="flex justify-center items-center pb-1 font-mono">
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a class="font-sans text-xl" href="/">Home</a>
            </li>
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a class="font-sans text-xl" href="/blog">Blog</a>
            </li>
            <li class="mx-2 md:mx-4 hover:scale-105 transition-transform hover:drop-shadow-[0_0_4px_hsla(200,100%,50%,60%)]">
                <a class="font-sans text-xl" href="/about">About</a>
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
