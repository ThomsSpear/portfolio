<script>
    let projets = [
        {
            title: "Projet 1 : Application Web",
            description: "Une application web utilisant SvelteKit pour gérer des données utilisateur.",
            lien: "https://github.com/tonrepo/projet1"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        }
    ];
</script>

<main class="p-8 bg-[#1F2937] text-[#F9FAFB]">
    <h2 class="text-3xl font-bold mb-6">Mes Projets</h2>

    {#each projets as projet}
        <div class="mb-6 p-4 bg-[#2D3748] rounded-md">
            <h3 class="text-2xl font-semibold">{projet.title}</h3>
            <p class="text-gray-400">{projet.description}</p>
            <a href={projet.lien} target="_blank" class="mt-2 inline-block px-4 py-2 bg-[#3B82F6] text-white rounded-lg hover:bg-blue-600 transition">Voir sur GitHub</a>
        </div>
    {/each}
</main>
