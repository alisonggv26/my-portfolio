<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import { caseStudies } from '$lib/data/index';
	import Button from '$lib/components/Button.svelte';
	import SectionLabel from '$lib/components/SectionLabel.svelte';
	import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';

	const sorted = $derived([...caseStudies].sort((a, b) => b.year - a.year));

	let page: HTMLElement;

	onMount(() => {
		return withGsapContext(page, (gsap) => {
			gsap.set('.js-gsap-page-title, .js-gsap-page-sub', { y: 30, opacity: 0 });
			gsap.set('.js-gsap-card', { y: 40, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-page-title', { y: 0, opacity: 1, duration: 0.65 })
				.to('.js-gsap-page-sub', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-card', { y: 0, opacity: 1, duration: 0.55, stagger: 0.14 }, '-=0.2');
		});
	});
</script>

<svelte:head>
	<title>Work — Alison Granger</title>
	<meta name="description" content="Selected case studies. Real problems, measurable outcomes." />
</svelte:head>

<div bind:this={page}>
	<!-- Page hero -->
	<section class="textured-panel bg-dark-bg pb-section pt-section">
		<div class="mx-auto max-w-6xl px-6 lg:px-8" style="padding-top: 6rem;">
			<SectionLabel label="Selected Work" dark />
			<h1 class="js-gsap-page-title text-hero mt-4 max-w-3xl font-black text-white">
				Building ecosystems <span class="text-metallic">at scale.</span>
			</h1>
			<p class="js-gsap-page-sub mt-6 max-w-xl text-lg leading-relaxed text-white/55">
				150+ events architected. 15k+ builders engaged. Every engagement starts with a clear problem
				and ends with infrastructure that outlasts the event.
			</p>
		</div>
	</section>

	<!-- Case studies list -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="flex flex-col gap-6">
				{#each sorted as study, i}
					<CaseStudyCard {study} index={i} />
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="textured-panel bg-gunmetal py-20">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<p class="text-sm font-semibold uppercase tracking-widest text-white/40">Next step</p>
			<h2 class="text-headline mt-3 font-black text-white">Have an ecosystem to build?</h2>
			<p class="mt-4 max-w-lg text-lg text-white/50">
				Tell me what you're working on. If it's a fit, I'll tell you how I'd approach it.
			</p>
			<div class="mt-8">
				<Button href="/contact/" size="lg" variant="outline" class="border-accent text-accent hover:bg-accent hover:text-ink">
					Start a conversation
				</Button>
			</div>
		</div>
	</section>
</div>
