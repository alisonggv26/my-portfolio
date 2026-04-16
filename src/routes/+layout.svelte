<script lang="ts">
	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { site } from '$lib/data/index';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={site.title} />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>
<Footer />
