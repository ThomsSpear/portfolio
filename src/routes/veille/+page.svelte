<script>
    import { Button } from "flowbite-svelte";
    import { ArrowRightOutline } from "flowbite-svelte-icons";

    let searchResults = []; // Les résultats de recherche en ligne
    let addedLinks = []; // Les liens ajoutés à la liste finale
    let showResults = false;

    async function searchNews() {
        console.log("Recherche de nouvelles déclenchée");
        try {
            const response = await fetch('/api/search-news');
            if (!response.ok) {
                console.error("Erreur de réponse:", response.statusText);
                throw new Error("Erreur de recherche");
            }
            searchResults = await response.json();
            showResults = true;
            console.log("Réponse reçue:", searchResults);
        } catch (error) {
            console.error("Erreur lors de la récupération des actualités:", error);
        }
    }

    function addLink(link) {
        addedLinks.push(link);
        searchResults = searchResults.filter(item => item.url !== link.url);
    }
</script>

<h2 class="text-3xl font-bold mb-6">Veille Technologique sur les Framework</h2>
<p class="mb-6 text-gray-400">Je suis l'actualité des Frameworks en utilisant différentes sources :</p>

<ul class="list-disc pl-5">
    <li class="mb-4"><a href="https://github.com/sveltejs/svelte/issues" target="_blank"
                        class="text-[#3B82F6] hover:underline">GitHub Issues Svelte</a></li>
    <li class="mb-4"><a href="https://joyofcode.xyz/" target="_blank" class="text-[#3B82F6] hover:underline">Joy of Code</a></li>
    <li class="mb-4"><a href="https://www.youtube.com/@Huntabyte" target="_blank"
                        class="text-[#3B82F6] hover:underline">Chaîne YouTube Huntabyte</a></li>
    <li class="mb-4"><a href="https://news.ycombinator.com/" target="_blank" class="text-[#3B82F6] hover:underline">Hacker News</a></li>
</ul>

<!-- Bouton pour lancer la recherche -->
<Button on:click={searchNews} class="w-fit mt-4">
    Rechercher les nouvelles récentes <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
</Button>

{#if showResults}
    <h3 class="text-2xl font-semibold mt-6">Résultats de la recherche :</h3>
    <ul class="list-disc pl-5">
        {#each searchResults as result}
            <li class="mb-4">
                <a href={result.url} target="_blank" class="text-[#3B82F6] hover:underline">{result.title}</a>
                <Button on:click={() => addLink(result)} class="ml-4">
                    Ajouter
                </Button>
            </li>
        {/each}
    </ul>
{/if}

{#if addedLinks.length > 0}
    <h3 class="text-2xl font-semibold mt-6">Liens ajoutés :</h3>
    <ul class="list-disc pl-5">
        {#each addedLinks as link}
            <li class="mb-4">
                <a href={link.url} target="_blank" class="text-[#3B82F6] hover:underline">{link.title}</a>
            </li>
        {/each}
    </ul>
{/if}
