<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import SectionLabel from '$lib/components/SectionLabel.svelte';

	const pillars = [
		{
			title: 'Diagnosis before prescription',
			body: "Most strategy problems are misdiagnosed. I spend more time on the front end—understanding what's actually broken—than on the solution. Fast answers to the wrong problem are expensive."
		},
		{
			title: 'Speed without sloppiness',
			body: "I work quickly. Not because I cut corners, but because I've learned that most problems don't need months of research—they need the right questions asked of the right people, fast."
		},
		{
			title: 'Outcomes, not outputs',
			body: "Decks are not deliverables. A strategy that doesn't change what people do is a document. I measure the work by what shifts, not what was produced."
		}
	];

	let page: HTMLElement;

	onMount(() => {
		return withGsapContext(page, (gsap) => {
			gsap.set('.js-gsap-page-title, .js-gsap-page-sub', { y: 30, opacity: 0 });
			gsap.set('.js-gsap-approach-col, .js-gsap-bio', { y: 35, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-page-title', { y: 0, opacity: 1, duration: 0.65 })
				.to('.js-gsap-page-sub', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-approach-col', { y: 0, opacity: 1, duration: 0.55, stagger: 0.14 }, '-=0.1')
				.to('.js-gsap-bio', { y: 0, opacity: 1, duration: 0.5 }, '-=0.2');
		});
	});
</script>

<svelte:head>
	<title>About — Alison Granger</title>
	<meta name="description" content="Event strategist & ecosystem architect. How I work and why it works." />
</svelte:head>

<div bind:this={page}>
	<!-- Page hero -->
	<section class="textured-panel bg-dark-bg pb-section pt-section">
		<div class="mx-auto max-w-6xl px-6 lg:px-8" style="padding-top: 6rem;">
			<SectionLabel label="About" dark />
			<h1 class="js-gsap-page-title text-hero mt-4 max-w-3xl font-black text-white">
				I make the<br /><span class="text-metallic">complex clear.</span>
			</h1>
			<p class="js-gsap-page-sub mt-6 max-w-xl text-lg leading-relaxed text-white/55">
				I'm an event strategist & ecosystem architect. I work with founders and product leaders
				who are facing problems that don't have obvious answers — and help them find the
				right ones.
			</p>
		</div>
	</section>

	<!-- Approach pillars -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="How I work" />
				<h2 class="text-headline mt-3 font-bold text-ink">My approach</h2>
			</div>
			<div class="grid gap-6 md:grid-cols-3">
				{#each pillars as pillar, i}
					<div class="js-gsap-approach-col panel-trim border border-border p-8" data-index={i}>
						<h3 class="text-base font-bold text-ink">{pillar.title}</h3>
						<p class="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Background -->
	<section class="textured-panel py-section bg-dark-bg">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-[2fr_1fr]">
				<div class="js-gsap-bio">
					<SectionLabel label="Background" dark />
					<h2 class="text-headline mt-4 font-bold text-white">Who I work with</h2>
					<div class="mt-6 space-y-4 text-base leading-relaxed text-white/60">
						<p>
							I've spent the last several years working with early-stage and growth-stage
							companies — mostly Series A and B — on the problems that tend to appear when
							things are moving fast: unclear priorities, conflicting roadmaps, products that
							don't match what customers actually need.
						</p>
						<p>
							I work best with founders who have strong product instincts but need a thinking
							partner, and with product leaders who are inheriting chaos and need to build
							structure without losing velocity.
						</p>
						<p>
							My engagements are focused and time-bounded. I don't do retainers for the
							sake of retainers. I come in, do the work, and leave you with something you
							can execute on.
						</p>
					</div>
				</div>
				<div class="js-gsap-bio">
					<SectionLabel label="Expertise" dark />
					<ul class="mt-4 space-y-3">
						{#each ['Product strategy', 'Discovery & research', 'Go-to-market', 'OKR design', 'Team process', 'Stakeholder alignment', 'Roadmapping', 'Positioning'] as skill}
							<li class="flex items-center gap-2 text-sm text-white/60">
								<span class="size-1.5 shrink-0 rounded-full bg-silver-trim"></span>
								{skill}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- CTA -->
	<section class="py-20 bg-surface">
		<div class="mx-auto max-w-6xl px-6 text-center lg:px-8">
			<h2 class="text-headline font-black text-ink">Ready to work together?</h2>
			<p class="mt-4 text-lg text-muted">Tell me what you're working on.</p>
			<div class="mt-8">
				<Button href="/contact/" size="lg">Get in touch</Button>
			</div>
		</div>
	</section>
</div>
