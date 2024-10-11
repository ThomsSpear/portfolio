<script>
    import '../app.css';
    import {Footer, FooterCopyright, Navbar, NavBrand, NavHamburger, NavLi, NavUl} from "flowbite-svelte";
</script>

<Navbar class="py-6 px-12" fluid>
    <NavBrand href="/">
        <img src="/logo.png" class="me-3 h-6 sm:h-9" alt="Thoms.Spear Logo"/>
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ThomsSpear Portfolio</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl>
        <NavLi href="/competences">Compétences</NavLi>
        <NavLi href="/projets">Projets</NavLi>
        <NavLi href="/veille">Veille Technologique</NavLi>
        <NavLi href="/synthese">Synthèse des Compétences</NavLi>
    </NavUl>
</Navbar>

<main class="flex flex-col grow items-center justify-center  bg-[#1F2937] text-[#F9FAFB] p-12">
    <slot/>
</main>

<Footer class="mb-6  mx-auto">
    <hr class=" border-gray-200 sm:mx-auto dark:border-gray-700 mb-6"/>
    <FooterCopyright href="/" by="Thoms.Spear™" year={new Date().getFullYear()}/>
</Footer>

