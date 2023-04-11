<script lang="ts">
    import type { LayoutData } from './$types';
    import '@fontsource/bebas-neue';
    import '@fontsource/lexend';
    import '@fontsource/roboto/300.css';
    import '@fontsource/roboto/400.css';
    import '@fontsource/roboto/500.css';
    import '@fontsource/roboto/700.css';

    import '../app.css';
    
    import Header from './Header.svelte';

    export let data: LayoutData;
</script>



<body class="antialiased bg-[hsl(225,29%,16%)]  text-slate-200">
       
    <Header />
    <slot />
    
</body>


<style>
    :root {
        scroll-padding-top: 6rem;
        scroll-behavior: smooth;
    }
</style>
