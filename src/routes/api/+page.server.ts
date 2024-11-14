// +server.ts
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    try {
        // Simule des données de recherche
        const newsData = [
            { title: "Nouvelle fonctionnalité dans Svelte", url: "https://svelte.dev/blog/some-new-feature" },
            { title: "Mise à jour SvelteKit", url: "https://kit.svelte.dev/docs/releases" },
            { title: "Introduction à Svelte", url: "https://svelte.dev/tutorial" }
        ];

        return new Response(JSON.stringify(newsData), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Erreur de recherche" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};
