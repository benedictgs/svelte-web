<script lang="ts">
    import type { LayoutData } from './$types';
    import '@fontsource/bebas-neue';
    import '@fontsource/lexend'
    import '../app.css';
    
    import Header from './Header.svelte';

    export let data: LayoutData;
</script>



<body class="antialiased bg-[hsl(225,29%,16%)]  text-slate-200">
       
    <Header />
    <slot />
    
</body>

