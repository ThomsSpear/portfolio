<script>
    export let categorie = "";
    export let sousCompetences = [];
    export let valide = [];
    export let toggleValide = () => {};
</script>

<div class="mb-6 p-4 bg-[#2D3748] rounded-md">
    <h3 class="text-2xl font-semibold mb-4 text-[#F9FAFB]">{categorie}</h3>
    <ul>
        {#each sousCompetences as sousCompetence, sousCompetenceIndex}
            <li class="mb-2">
                <label class="flex items-center space-x-3">
                    <input
                            type="checkbox"
                            bind:checked={valide[sousCompetenceIndex]}
                            on:change={() => toggleValide()}
                            class="form-checkbox h-5 w-5 text-[#3B82F6] border-gray-300 rounded" />
                    <span class="text-gray-400">{sousCompetence}</span>
                </label>
            </li>
        {/each}
    </ul>
</div>
