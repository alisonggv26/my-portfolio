<script lang="ts">
	import type { Snippet } from 'svelte';
	// `resolve()` requires statically-known route types and can't handle dynamic hrefs.
	// `base` is deprecated but remains the only option for runtime path prefixing.
	// eslint-disable-next-line @typescript-eslint/no-deprecated
	import { base } from '$app/paths';

	interface Props {
		href?: string;
		variant?: 'primary' | 'outline' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		external?: boolean;
		onclick?: () => void;
		class?: string;
		children: Snippet;
	}

	let {
		href,
		variant = 'primary',
		size = 'md',
		external = false,
		onclick,
		class: extraClass = '',
		children
	}: Props = $props();

	const resolvedHref = $derived(
		href && !href.startsWith('http') && !href.startsWith('mailto:') && !href.startsWith('#')
			? `${base}${href}`
			: href
	);

	const sizeClasses: Record<string, string> = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-base',
		lg: 'px-8 py-4 text-lg'
	};

	const variantClasses: Record<string, string> = {
		primary: 'bg-ink text-white hover:bg-dark-surface focus-visible:ring-ink',
		outline:
			'border-2 border-ink text-ink hover:bg-ink hover:text-white focus-visible:ring-ink',
		ghost: 'text-ink hover:underline focus-visible:ring-ink'
	};

	const baseClasses = `inline-flex items-center justify-center font-semibold rounded-none transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer`;
</script>

{#if resolvedHref}
	<a
		href={resolvedHref}
		class="{baseClasses} {sizeClasses[size]} {variantClasses[variant]} {extraClass}"
		target={external ? '_blank' : undefined}
		rel={external ? 'noopener noreferrer' : undefined}
	>
		{@render children()}
	</a>
{:else}
	<button
		class="{baseClasses} {sizeClasses[size]} {variantClasses[variant]} {extraClass}"
		{onclick}
	>
		{@render children()}
	</button>
{/if}
