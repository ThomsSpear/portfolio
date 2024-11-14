<script>
    import {Button, Card, Heading, P} from "flowbite-svelte";
    import {ArrowRightOutline} from "flowbite-svelte-icons";

    let projets = [
        {
            title: "Projet 1 : M2L",
            description: "Projet de groupe réalisé en centre de formation.",
            lien: "https://gitlab.com/thomas-boris-matt-o/ap-thomas-boris-matteo"
        },
        {
            title: "Projet 2 : BioRelais",
            description: "Réalisation d'un site dynamique.",
            lien: ""
        },
        {
            title: "Projet 3 : Plateforme commerciale",
            description: "Réalisation d'une plateforme commerciale pour l'entreprise.",
            lien: "/plateforme-commerciale"
        },
    ];
</script>

<h2 class="text-3xl font-bold mb-6">Mes Projets</h2>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{#each projets as projet}
    <Card class="flex flex-col h-full">
        <Heading tag="h5" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projet.title}</Heading>
        <P class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{projet.description}</P>
        <Button href={projet.lien} class="w-fit">
            Voir  <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>
{/each}
</div>