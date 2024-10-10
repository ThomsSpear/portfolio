<script>
    import '../app.css';
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
    import Button from '../components/Button.svelte';
    import { page } from '$app/stores';
</script>

<Header />

{#if $page.url.pathname !== '/'}
    <Button href="/" text="Retour à l'accueil" class="m-4" />
{/if}

<slot />
<Footer />
