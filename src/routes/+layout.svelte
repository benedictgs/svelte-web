<script lang="ts">
    import type { LayoutData } from './$types';
    import '../app.css';
    
    import Header from './Header.svelte';

    export let data: LayoutData;
</script>



<body class="antialiased bg-gray-700 text-slate-200">
       
    <Header />
    <slot />
    
</body>

