
<script lang="ts">
    import { fade } from "svelte/transition";
    import BackgroundHighlight from '$lib/media/dark-gradient-highlight.png';
    import CountryFlag from '$lib/media/indonesia-flag.png';

    import ScrollUpButton from "$lib/components/ScrollUpButton.svelte";

    let stats = [
        {key:"Country of Origin", value:"Indonesia"},
        {key:"Gender", value:"Male ♂️"},
        {key:"Status", value:"Single 🔥"},
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



<picture class="hidden absolute justify-end top-0 -z-0">
    <img class="w-screen h-screen object-cover" src={BackgroundHighlight} alt="backgroundhighlight" decoding="async">
</picture>

<main class="flex flex-col">
    <section id="hero" class="flex justify-center">
        
        <div class="w-full lg:max-w-screen-lg mb-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-10 bg-slate-900/50  mx-3 p-6 md:px-6 rounded-xl">
            <div in:fade="{{delay:100,duration:1000}}" 
            class="flex flex-col justify-between sm:max-w-sm row-span-2 lg:col-span-1">
                <div id="identity" class="text-center">
                    <div class="flex flex-row justify-center">
                        <h1 class="font-bebas text-3xl">Benedict G S</h1>
                        <img class="h-9 mx-1 "src={CountryFlag} alt="Indonesian Flag">                       
                    </div>
                    <h2>Tech Enthusiast</h2>
                </div>
                <picture></picture>
                <div id="stats" class="grid grid-cols-3 place-items-center p-3">
                    <div class="flex flex-col text-center"> <p class="font-bebas text-4xl">{age}</p> <p class="uppercase">yr</p></div>
                    <div class="flex flex-col text-center"> <p class="font-bebas text-4xl">177</p> <p class="uppercase">cm</p></div>
                    <div class="flex flex-col text-center"> <p class="font-bebas text-4xl">77</p> <p class="uppercase">kg</p></div>
                </div>
            </div>
            <div>
                <hr class=" my-3  border-gray-600">
                <h3 in:fade="{{delay:1000,duration:1000}}" class="font-bebas text-xl">Personal Details</h3>
                <ul class="">
                    {#each stats as stat}
                    <li><span class="font-light">{stat.key} : </span><span class="font-semibold">{stat.value}</span></li>
                    {/each}
                </ul>
            </div>
            <div>
                <hr class=" my-3  border-gray-600">
                <h3 in:fade="{{delay:1000,duration:1000}}" class="font-bebas text-xl">Chart</h3>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates totam labore, perferendis cupiditate veniam sequi cum neque architecto praesentium et. Ipsa voluptate excepturi blanditiis, obcaecati molestiae ratione velit tempore iusto?
            </div>
            <div class="sm:col-span-2">
                <hr class=" my-3  border-gray-600">
                <h3 in:fade="{{delay:1000,duration:1000}}" class="font-bebas text-xl">Timeline</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatem nemo adipisci iste debitis. Quidem, a. Nesciunt nisi error quos quo, doloremque aut voluptatem adipisci nostrum similique, iusto veniam omnis.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ut maxime fugiat in sequi, magni magnam quod unde molestiae dolor excepturi nemo neque laborum at ipsam sapiente vero. Architecto, odio?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque labore sed omnis blanditiis quod accusamus aliquid voluptatibus doloremque, incidunt delectus amet rem ea hic, ratione ullam error eligendi mollitia nulla!
                </p>
            </div>
        </div>
    </section>
    <section id="brag" class="flex justify-center relative">
        <div class="absolute top-0 inset-x-0 h-[37.5rem] [mask-image:linear-gradient(0deg,transparent,black)] bg-[url('$lib/media/one-small-grid.svg')] bg-[center_top_-1px] border-t dark:border-slate-100/5 xl:top-8"></div>
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">brag icon</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    <section id="story" class="flex justify-center ">
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">story</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    <section id="mentor" class="flex justify-center ">
        <div class="container h-[80vh] grid grid-cols-3 bg-black/50  mx-3 p-6 md:px-6 rounded-3xl">
            <h1 in:fade="{{delay:100,duration:1000}}">Influencial people</h1>
            <p in:fade="{{delay:600,duration:1000}}"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam, voluptatem non ad veritatis maxime nemo culpa facilis omnis sint? Tempora nisi soluta iure necessitatibus at amet similique eius aperiam inventore?</p>
            
            <div>
                
            </div>
        </div>
    </section>
    
    <ScrollUpButton />
</main>
