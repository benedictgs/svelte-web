<script lang="ts">
    import type { LayoutData } from './$types';
    import '../app.css';
    
    import Header from './Header.svelte';

    export let data: LayoutData;
</script>


<body>
    <Header />
    <slot />
    
</body>

<style>

</style>