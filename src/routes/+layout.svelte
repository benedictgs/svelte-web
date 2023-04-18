<script lang="ts">
    import type { LayoutData } from './$types';
    import '@fontsource/bebas-neue';
    import '@fontsource/lexend'
    import '../app.css';

    import helloThere from '$lib/hello';
    
    import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { afterUpdate } from 'svelte';

    export let data: LayoutData;

    afterUpdate(() => {
        helloThere();
    });

</script>



<body class="antialiased bg-[hsl(225,29%,16%)]  text-slate-200 flex flex-col justify-between min-h-screen">
       
    <Header />
    <slot />
    <Footer />
</body>


<style>
    :root {
        scroll-padding-top: 6rem;
        scroll-behavior: smooth;
    }
</style>
