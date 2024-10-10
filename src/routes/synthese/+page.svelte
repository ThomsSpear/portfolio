<script>
    import CompetenceCard from '../../components/CompetenceCard.svelte';

    let competences = [
        {
            categorie: "Gérer le patrimoine informatique",
            sousCompetences: [
                "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
                "Exploiter des référentiels, normes et standards adoptés par le prestataire informatique"
            ],
            valide: [false, false]
        },
        {
            categorie: "Répondre aux incidents et aux demandes d’assistance et d’évolution",
            sousCompetences: [
                "Collecter, suivre et orienter des demandes",
                "Traiter des demandes concernant les applications"
            ],
            valide: [false, false]
        },
        {
            categorie: "Développer la présence en ligne de l’organisation",
            sousCompetences: [
                "Référencer les services en ligne de l’organisation et mesurer leur visibilité",
                "Participer à l’évolution d’un site Web exploitant les données de l’organisation"
            ],
            valide: [false, false]
        },
        {
            categorie: "Travailler en mode projet",
            sousCompetences: [
                "Analyser les objectifs et les modalités d’organisation d’un projet",
                "Planifier les activités"
            ],
            valide: [false, false]
        },
        {
            categorie: "Mettre à disposition des utilisateurs un service informatique",
            sousCompetences: [
                "Réaliser les tests d’intégration et d’acceptation d’un service",
                "Déployer un service",
                "Accompagner les utilisateurs dans la mise en place d’un service"
            ],
            valide: [false, false, false]
        },
        {
            categorie: "Organiser son développement professionnel",
            sousCompetences: [
                "Mettre en place son environnement d’apprentissage personnel",
                "Mettre en œuvre des outils et stratégies de veille informationnelle",
                "Gérer son identité professionnelle",
                "Développer son projet professionnel"
            ],
            valide: [false, false, false, false]
        }
    ];

    function toggleValide(competenceIndex, sousCompetenceIndex) {
        competences[competenceIndex].valide[sousCompetenceIndex] = !competences[competenceIndex].valide[sousCompetenceIndex];
    }
</script>

<main class="p-8 bg-[#1F2937] text-[#F9FAFB]">
    <h2 class="text-3xl font-bold mb-6">Synthèse des Compétences</h2>

    {#each competences as competence, competenceIndex}
        <CompetenceCard
                categorie={competence.categorie}
                sousCompetences={competence.sousCompetences}
                valide={competence.valide}
                toggleValide={() => toggleValide(competenceIndex, 0)} />
    {/each}
</main>
