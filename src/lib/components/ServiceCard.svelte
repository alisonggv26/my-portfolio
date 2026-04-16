<script lang="ts">
	import type { Service } from '$lib/data/index';

	interface Props {
		service: Service;
		index?: number;
	}

	let { service, index = 0 }: Props = $props();
</script>

<div
	class="js-gsap-service panel-trim flex flex-col gap-4 border p-8 transition-colors duration-200 {service.highlighted
		? 'border-accent/60 bg-gunmetal'
		: 'border-border hover:border-accent/40'}"
	data-index={index}
>
	{#if service.highlighted}
		<span class="self-start bg-silver-trim px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide text-ink">
			Most requested
		</span>
	{/if}

	<div>
		<h3 class="text-title font-bold {service.highlighted ? 'text-white' : 'text-ink'}">{service.title}</h3>
		<p class="mt-2 text-base leading-relaxed {service.highlighted ? 'text-white/60' : 'text-muted'}">{service.description}</p>
	</div>

	<ul class="mt-auto flex flex-col gap-2">
		{#each service.deliverables as deliverable}
			<li class="flex items-center gap-2 text-sm {service.highlighted ? 'text-white/60' : 'text-muted'}">
				<span class="size-1.5 shrink-0 rounded-full bg-silver-trim"></span>
				{deliverable}
			</li>
		{/each}
	</ul>
</div>
