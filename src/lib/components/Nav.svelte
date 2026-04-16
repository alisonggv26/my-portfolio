<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import { site } from '$lib/data/index';

	let scrolled = $state(false);
	let mobileOpen = $state(false);

	$effect(() => {
		const onScroll = () => {
			scrolled = window.scrollY > 20;
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});

	const links = [
		{ label: 'Work', href: '/work/' },
		{ label: 'About', href: '/about/' },
		{ label: 'Contact', href: '/contact/' }
	] as const;
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled || mobileOpen
		? 'bg-dark-bg/95 backdrop-blur-sm shadow-lg'
		: 'bg-transparent'}"
>
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
		<a href={resolve('/')} class="text-base font-bold tracking-tight text-white hover:text-accent transition-colors">
			{site.name}
		</a>

		<!-- Desktop nav -->
		<nav class="hidden items-center gap-8 md:flex">
			{#each links as link}
				<a
					href={resolve(link.href)}
					class="text-sm font-medium transition-colors {$page.url.pathname === resolve(link.href)
						? 'text-accent'
						: 'text-white/80 hover:text-white'}"
				>
					{link.label}
				</a>
			{/each}
			<a
				href={resolve('/contact/')}
				class="bg-ink border border-accent/40 px-5 py-2 text-sm font-semibold text-accent transition-colors hover:bg-dark-surface"
			>
				Let's talk
			</a>
		</nav>

		<!-- Mobile hamburger -->
		<button
			class="flex flex-col gap-1.5 p-2 md:hidden"
			onclick={() => (mobileOpen = !mobileOpen)}
			aria-label="Toggle menu"
			aria-expanded={mobileOpen}
		>
			<span
				class="block h-0.5 w-6 bg-white transition-transform duration-200 {mobileOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-white transition-opacity duration-200 {mobileOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="block h-0.5 w-6 bg-white transition-transform duration-200 {mobileOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>

	<!-- Mobile menu -->
	{#if mobileOpen}
		<nav class="border-t border-white/10 bg-dark-bg/95 px-6 pb-6 pt-4 md:hidden">
			{#each links as link}
				<a
					href={resolve(link.href)}
					class="block py-3 text-base font-medium {$page.url.pathname === resolve(link.href)
						? 'text-accent'
						: 'text-white/80 hover:text-white'}"
					onclick={() => (mobileOpen = false)}
				>
					{link.label}
				</a>
			{/each}
			<a
				href={resolve('/contact/')}
				class="mt-4 block border border-accent/40 bg-ink px-5 py-3 text-center text-sm font-semibold text-accent hover:bg-dark-surface"
				onclick={() => (mobileOpen = false)}
			>
				Let's talk
			</a>
		</nav>
	{/if}
</header>
