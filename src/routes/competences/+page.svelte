<script>
    import {Button} from "flowbite-svelte";

    let sousCompetences = [
        "Frontend (HTML, CSS, JavaScript)",
        "Backend (Node.js, API REST)",
        "Svelte/SvelteKit"
    ];
</script>

<h2 class="text-3xl font-bold mb-6">Compétence : Développement Web</h2>
<p class="mb-4 text-gray-400">Compétences en développement web, notamment en Svelte/SvelteKit.</p>

<ul class="list-disc text-left pl-5">
    {#each sousCompetences as competence}
        <li class="mb-2">{competence}</li>
    {/each}
</ul>

<Button href="/projets">
    Voir
    les projets associés
</Button>

