<script>
    export let text = "Button";
    export let href = "#"; // Lien par défaut
</script>

<a href={href} class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
    {text}
</a>
