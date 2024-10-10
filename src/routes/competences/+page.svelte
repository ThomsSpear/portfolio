<script>
    let sousCompetences = [
        "Frontend (HTML, CSS, JavaScript)",
        "Backend (Node.js, API REST)",
        "Svelte/SvelteKit"
    ];
</script>

<main class="flex flex-col items-center p-8 bg-[#1F2937] text-[#F9FAFB]">
    <h2 class="text-3xl font-bold mb-6">Compétence : Développement Web</h2>
    <p class="mb-4 text-gray-400">Compétences en développement web, notamment en Svelte/SvelteKit.</p>

    <ul class="list-disc text-left pl-5">
        {#each sousCompetences as competence}
            <li class="mb-2">{competence}</li>
        {/each}
    </ul>

    <a href="/projets" class="mt-6 inline-block px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition">Voir les projets associés</a>
</main>
