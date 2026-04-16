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
			gsap.set('.js-gsap-stat', { y: 30, opacity: 0 });
			gsap.set('.js-gsap-card, .js-gsap-service', { y: 40, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-hero-label', { y: 0, opacity: 1, duration: 0.5 })
				.to('.js-gsap-hero-title', { y: 0, opacity: 1, duration: 0.8 }, '-=0.2')
				.to('.js-gsap-hero-sub', { y: 0, opacity: 1, duration: 0.6 }, '-=0.35')
				.to('.js-gsap-hero-ctas', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-stat', { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 }, '-=0.1')
				.to('.js-gsap-card', { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 }, '-=0.1')
				.to('.js-gsap-service', { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, '-=0.3');
		});
	});
</script>

<svelte:head>
	<title>Alison Granger — Event Strategist & Ecosystem Architect</title>
</svelte:head>

<div bind:this={page}>
	<!-- Hero -->
	<section class="textured-panel bg-dark-bg flex min-h-svh flex-col justify-center pb-section pt-section">
		<div class="mx-auto w-full max-w-6xl px-6 lg:px-8">
			<p class="js-gsap-hero-label mb-6 text-xs font-semibold uppercase tracking-widest text-white/50">
				Event Strategist & Ecosystem Architect
			</p>
			<h1 class="js-gsap-hero-title text-display max-w-4xl font-black text-white">
				Most events optimize<br />for <span class="text-metallic">attendance.</span><br />I optimize for outcomes.
			</h1>
			<p class="js-gsap-hero-sub mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
				Designing curated environments where the right people meet, build, and move ecosystems forward.
				10+ years bridging product, GTM, and developer relations across AI, developer, and startup ecosystems.
			</p>
			<div class="js-gsap-hero-ctas mt-10 flex flex-wrap gap-4">
				<Button href="/work/" size="lg">See my work</Button>
				<Button href="/contact/" size="lg" variant="outline">Let's talk</Button>
			</div>

			<!-- Stats -->
			<div class="mt-16 flex flex-wrap gap-12">
				{#each [
					{ value: '150+', label: 'Events Architected' },
					{ value: '15k+', label: 'Builders Engaged' },
					{ value: '10+', label: 'Years Operating' }
				] as stat}
					<div class="js-gsap-stat">
						<p class="text-4xl font-black text-white">{stat.value}</p>
						<p class="mt-1 text-xs font-semibold uppercase tracking-widest text-white/40">{stat.label}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Featured Work -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Selected Work" />
				<h2 class="text-headline mt-3 font-bold text-ink">Building ecosystems at scale</h2>
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
				<h2 class="text-headline mt-3 font-bold text-white">What Blooming delivers</h2>
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
			<h2 class="text-headline font-black text-white">Let's build something together.</h2>
			<p class="mt-4 text-lg text-white/40">The best ecosystems are built by someone who understands the stakes, the people, and the signal.</p>
			<div class="mt-8">
				<Button href="/contact/" size="lg" variant="outline" class="border-accent text-accent hover:bg-accent hover:text-ink">
					Get in touch
				</Button>
			</div>
		</div>
	</section>
</div>
