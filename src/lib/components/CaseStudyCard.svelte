<script lang="ts">
	import type { CaseStudy } from '$lib/data/index';

	interface Props {
		study: CaseStudy;
		index?: number;
		dark?: boolean;
	}

	let { study, index = 0, dark = false }: Props = $props();
</script>

<article
	class="js-gsap-card panel-trim group flex flex-col gap-6 border p-8 transition-colors duration-200 {dark
		? 'border-white/10 hover:border-white/20'
		: 'border-border hover:border-accent'}"
	data-index={index}
>
	<div class="flex flex-wrap items-start justify-between gap-4">
		<div>
			<p class="text-xs font-semibold uppercase tracking-widest {dark ? 'text-white/40' : 'text-muted'}">
				{study.client} · {study.year}
			</p>
			<p class="mt-1 text-sm font-medium {dark ? 'text-white/60' : 'text-muted'}">{study.engagement}</p>
		</div>
		<span
			class="shrink-0 border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent"
		>
			{study.outcome.split(';')[0].trim()}
		</span>
	</div>

	<div>
		<h3 class="text-title font-bold {dark ? 'text-white' : 'text-ink'}">{study.title}</h3>
		<p class="mt-3 text-base leading-relaxed {dark ? 'text-white/60' : 'text-muted'}">
			{study.challenge}
		</p>
	</div>

	<div class="mt-auto flex flex-wrap items-center justify-between gap-3">
		<div class="flex flex-wrap gap-2">
			{#each study.tags as tag}
				<span
					class="px-2.5 py-1 text-xs font-medium {dark
						? 'bg-white/5 text-white/50'
						: 'bg-border text-muted'}"
				>
					{tag}
				</span>
			{/each}
		</div>
		{#if study.link}
			<a
				href={study.link}
				target="_blank"
				rel="noopener noreferrer"
				class="text-xs font-semibold uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
			>
				View →
			</a>
		{/if}
	</div>
</article>
