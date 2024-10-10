<script>
    import Button from './Button.svelte';
</script>

<header class="bg-[#1F2937] p-4">
    <h1 class="text-3xl text-[#F9FAFB] text-center">Mon Portfolio</h1>
    <nav class="flex justify-center space-x-4 mt-4">
        <Button href="/competences" text="Compétences" />
        <Button href="/projets" text="Projets" />
        <Button href="/veille" text="Veille Technologique" />
        <Button href="/synthese" text="Synthèse des Compétences" />
    </nav>
</header>
