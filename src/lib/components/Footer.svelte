<script lang="ts">
	import { site } from '$lib/data/index';

	const year = $derived(new Date().getFullYear());
</script>

<footer class="bg-dark-bg py-12">
	<div class="mx-auto max-w-6xl px-6 lg:px-8">
		<div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
			<div>
				<p class="text-sm font-bold text-white">{site.name}</p>
				<p class="text-sm text-white/50">{site.tagline}</p>
			</div>
			<a
				href="mailto:{site.email}"
				class="text-sm font-medium text-white/70 transition-colors hover:text-accent"
			>
				{site.email}
			</a>
		</div>
		<div class="mt-8 border-t border-white/10 pt-8">
			<p class="text-xs text-white/30">&copy; {year} {site.name}. All rights reserved.</p>
		</div>
	</div>
</footer>
