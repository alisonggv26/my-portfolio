<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import { caseStudies, services } from '$lib/data/index';
	import Button from '$lib/components/Button.svelte';
	import SectionLabel from '$lib/components/SectionLabel.svelte';
	import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';

	const featured = $derived(caseStudies.filter((s) => s.featured));

	let page: HTMLElement;

	onMount(() => {
		return withGsapContext(page, (gsap) => {
			gsap.set(
				'.js-gsap-hero-label, .js-gsap-hero-title, .js-gsap-hero-sub, .js-gsap-hero-ctas',
				{ y: 40, opacity: 0 }
			);
			gsap.set('.js-gsap-card, .js-gsap-service', { y: 40, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-hero-label', { y: 0, opacity: 1, duration: 0.5 })
				.to('.js-gsap-hero-title', { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
				.to('.js-gsap-hero-sub', { y: 0, opacity: 1, duration: 0.6 }, '-=0.35')
				.to('.js-gsap-hero-ctas', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-card', { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.1')
				.to('.js-gsap-service', { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3');
		});
	});
</script>

<svelte:head>
	<title>Alison Granger — Product & Strategy Consultant</title>
</svelte:head>

<div bind:this={page}>
	<!-- Hero -->
	<section class="textured-panel bg-dark-bg flex min-h-svh flex-col justify-center pb-section pt-section">
		<div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
			<p class="js-gsap-hero-label mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
				Product & Strategy Consultant
			</p>
			<h1 class="js-gsap-hero-title text-display max-w-4xl font-black text-white">
				I solve<br /><span class="text-metallic">real problems.</span>
			</h1>
			<p class="js-gsap-hero-sub mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
				I work with founders and product teams to turn messy, complex problems into clear strategies
				and outcomes. No fluff, no frameworks for the sake of frameworks — just work that ships.
			</p>
			<div class="js-gsap-hero-ctas mt-10 flex flex-wrap gap-4">
				<Button href="/work/" size="lg">See my work</Button>
				<Button href="/contact/" size="lg" variant="outline">Let's talk</Button>
			</div>
		</div>
	</section>

	<!-- Featured Work -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Selected Work" />
				<h2 class="text-headline mt-3 font-bold text-ink">Problems I've solved</h2>
			</div>
			<div class="grid gap-6 lg:grid-cols-2">
				{#each featured as study, i}
					<CaseStudyCard {study} index={i} />
				{/each}
			</div>
			<div class="mt-10">
				<Button href="/work/" variant="outline">View all work</Button>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section class="textured-panel py-section bg-dark-bg">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Services" dark />
				<h2 class="text-headline mt-3 font-bold text-white">What I do</h2>
			</div>
			<div class="grid gap-6 sm:grid-cols-2">
				{#each services as service, i}
					<ServiceCard {service} index={i} />
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Strip -->
	<section class="textured-panel bg-gunmetal py-20">
		<div class="mx-auto max-w-6xl px-6 text-center lg:px-8">
			<h2 class="text-headline font-black text-white">Ready to work together?</h2>
			<p class="mt-4 text-lg text-white/40">Tell me about the problem. I'll tell you if I can help.</p>
			<div class="mt-8">
				<Button href="/contact/" size="lg" variant="outline" class="border-accent text-accent hover:bg-accent hover:text-ink">
					Get in touch
				</Button>
			</div>
		</div>
	</section>
</div>
