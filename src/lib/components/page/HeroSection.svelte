<script lang="ts">
    import { onMount } from "svelte";
    import { fade, fly } from "svelte/transition";
    import CountryFlag from '$lib/media/indonesia-flag.png';
	import RadarContainer from "../chart/RadarContainer.svelte";
	import LineAreaContainer from "../chart/LineAreaContainer.svelte";
    import PotraitProfile from '$lib/media/potrait-profile.png';
    import PotraitProfileMini from '$lib/media/potrait-profile-narrow.webp';
	import IntersectionObserver from "../IntersectionObserver.svelte";


    onMount(()=>{
        const timeout = setTimeout(() => {
            if (scrollY<300) {
                const element = document.getElementById('hero');
                element?.scrollIntoView({ behavior: 'smooth' });
                console.log('beep')
            }
		}, 5000);

		return () => clearTimeout(timeout);
	})

    export let id:string = "hero";

    let stats = [
        {key:"Country of Origin", value:"Indonesia"},
        {key:"Gender", value:"Male ♂️"},
        {key:"Status", value:"Single 🔥 and Barely Alive"},
        {key:"Experience", value:"2 years"},
        {key:"Degree", value:"Bachelor of Engineering"},
        {key:"Intelligence Quotient", value:"133"},
        {key:"Meme and Pizza🍕", value:"Yes 👌"},
    ];

    function calculateAge() {
        const dob = new Date('December 2, 1996');
        const today = new Date();
        
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }
        
        return age;
    }

    let age = calculateAge();   


</script>

<IntersectionObserver let:intersecting once={true}>
    {#if intersecting}
        <section id={id} class="flex justify-center bg-cover bg-top bg-no-repeat bg-fixed bg-[url('$lib/media/background-hero-blur.webp')] pt-4 ">
            <div class="w-full lg:max-w-screen-lg mb-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-10 bg-black/50  mx-3 p-6 md:px-6 rounded-xl">
                <div class="flex flex-col justify-between sm:max-w-sm row-span-2 lg:col-span-1">
                    <div in:fade={{delay:600,duration:1000}} class="flex flex-row hover:animate-pulse">
                        <div class="sm:hidden grow-0 max-w-[10rem]">
                            <img loading="lazy" src={PotraitProfileMini} alt="Profile" class="  ">
                        </div>
                        <div id="identity" class="grow flex flex-col sm:items-center mb-3">
                            <div class="flex flex-row ">
                                <h1 class="font-bebas text-3xl">Benedict G. S.</h1>
                                <img class="h-8 mx-1 "src={CountryFlag} alt="Indonesian Flag">
                            </div>
                            <h2>Creative Tech Enthusiast</h2>
                        </div>
                    </div>
                    <picture in:fly="{{delay:1000,duration:2000, y:50}}" class=" hidden sm:grid justify-center hover:animate-pulse">
                        <img loading="lazy" src={PotraitProfile} alt="Profile" class="max-h-[40rem] ">
                    </picture>
                    <div in:fly="{{delay:1200,duration:2000, y:50}}" id="stats" class="grid grid-cols-3 place-items-center p-3">
                        <div class="flex flex-col text-center hover:animate-pulse"> <p class="font-bebas text-4xl">{age}</p> <p class="uppercase">yr</p></div>
                        <div class="flex flex-col text-center hover:animate-pulse"> <p class="font-bebas text-4xl">77</p> <p class="uppercase">kg</p></div>
                        <div class="flex flex-col text-center hover:animate-pulse"> <p class="font-bebas text-4xl">177</p> <p class="uppercase">cm</p></div>
                    </div>
                </div>
                <div>
                    <hr class=" my-3  border-gray-600">
                    <h3 in:fade="{{delay:600, duration:1000}}" class="font-bebas text-xl hover:animate-pulse">Personal Details</h3>
                    <ul in:fly="{{delay:1000,duration:2000, y:50}}" class="">
                        {#each stats as stat}
                        <li class="hover:animate-pulse"><span class="font-light">{stat.key} : </span><span class="font-semibold">{stat.value}</span></li>
                        {/each}
                    </ul>
                </div>
                <div class="flex flex-col">
                    <hr class=" my-3  border-gray-600">
                    <h3 in:fade="{{delay:600,duration:1000}}" class="font-bebas text-xl hover:animate-pulse">Chart</h3>
                    <div in:fly="{{delay:1000,duration:2000, y:50}}" class=" min-h-[10rem] hover:animate-pulse">
                        <RadarContainer/>
                    </div>
                </div>
                <div class="sm:col-span-2 flex flex-col">
                    <hr class=" my-3  border-gray-600">
                    <h3 in:fade="{{delay:600,duration:1000}}" class="font-bebas text-xl mb-3 hover:animate-pulse">Timeline of Performance</h3>
                    <div in:fly="{{delay:1200,duration:2000, y:50}}" class="min-h-[10rem] hover:animate-pulse">
                        <LineAreaContainer/>
                    </div>
                </div>

            </div>
        </section>
    {:else}
    <section id={id} class="flex justify-center bg-cover bg-top bg-no-repeat bg-fixed bg-[url('$lib/media/background-hero-blur.webp')] pt-4 "></section>
    {/if}
</IntersectionObserver>