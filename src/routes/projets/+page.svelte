<script>
    import {Button, Card, Heading, P} from "flowbite-svelte";
    import {ArrowRightOutline} from "flowbite-svelte-icons";

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
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        }
        ,        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 1 : Application Web",
            description: "Une application web utilisant SvelteKit pour gérer des données utilisateur.",
            lien: "https://github.com/tonrepo/projet1"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        },
        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        }
        ,        {
            title: "Projet 2 : Gestion de tâches",
            description: "Une application pour gérer des tâches en utilisant l'API REST.",
            lien: "https://github.com/tonrepo/projet2"
        }
    ];
</script>

<h2 class="text-3xl font-bold mb-6">Mes Projets</h2>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
{#each projets as projet}
    <Card class="flex flex-col h-full">
        <Heading tag="h5" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{projet.title}</Heading>
        <P class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">{projet.description}</P>
        <Button href={projet.lien} class="w-fit">
            Voir sur Github <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
    </Card>
{/each}
</div>