<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import Button from '$lib/components/Button.svelte';
	import SectionLabel from '$lib/components/SectionLabel.svelte';

	const pillars = [
		{
			title: 'Attendance over impact',
			body: 'Most events optimize for scale when they should optimize for signal. Attendees become a metric, not a curated ecosystem. The room fills — but nothing moves.'
		},
		{
			title: 'Intentional curation creates value',
			body: 'Proximity to decision-makers and pioneers. Access to unfiltered patterns. Communities built on repeated, high-trust interactions — not a once-a-year conference and a Slack group.'
		},
		{
			title: 'AI moves too fast for playbooks',
			body: 'Companies expanding cross-border need ecosystem architecture, not logistics. Someone who understands developer communities, international dynamics, and what actually moves the needle.'
		}
	];

	const timeline = [
		{
			period: '2015–2022',
			label: 'European foundation',
			body: 'Event production and operations at Festival de Luchon and BeMyApp EMEA — scaling infrastructure, managing partnerships, owning execution across festivals and productions.'
		},
		{
			period: '2022–2025',
			label: 'US AI ecosystem',
			body: 'Pivoted to the San Francisco AI ecosystem. Scaled AI User Group from zero to 15,000+ builders across 150+ curated events in ~3 years. Ran enterprise programs with NVIDIA, Google, IBM, Meta.'
		},
		{
			period: '2026',
			label: 'Blooming',
			body: 'Founded Blooming — a strategic operating layer for tech companies expanding across markets, communities, and narratives. Delivered 5 ecosystem events in 60 days across US–LatAm corridors at launch.'
		}
	];

	let page: HTMLElement;

	onMount(() => {
		return withGsapContext(page, (gsap) => {
			gsap.set('.js-gsap-page-title, .js-gsap-page-sub', { y: 30, opacity: 0 });
			gsap.set('.js-gsap-approach-col, .js-gsap-bio, .js-gsap-timeline-item', { y: 35, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-page-title', { y: 0, opacity: 1, duration: 0.65 })
				.to('.js-gsap-page-sub', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-approach-col', { y: 0, opacity: 1, duration: 0.55, stagger: 0.14 }, '-=0.1')
				.to('.js-gsap-bio', { y: 0, opacity: 1, duration: 0.5 }, '-=0.2')
				.to('.js-gsap-timeline-item', { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 }, '-=0.2');
		});
	});
</script>

<svelte:head>
	<title>About — Alison Granger</title>
	<meta name="description" content="Event strategist & ecosystem architect. 10+ years, 150+ events, 15k+ builders." />
</svelte:head>

<div bind:this={page}>
	<!-- Page hero -->
	<section class="textured-panel bg-dark-bg pb-section pt-section">
		<div class="mx-auto max-w-6xl px-6 lg:px-8" style="padding-top: 6rem;">
			<SectionLabel label="About" dark />
			<h1 class="js-gsap-page-title text-hero mt-4 max-w-3xl font-black text-white">
				I design environments<br /><span class="text-metallic">where the right people meet.</span>
			</h1>
			<p class="js-gsap-page-sub mt-6 max-w-xl text-lg leading-relaxed text-white/55">
				Event strategist & ecosystem architect. 10+ years operating at the intersection of Product,
				GTM, and Developer Relations — from European festivals to AI developer communities in SF.
			</p>
		</div>
	</section>

	<!-- Point of view -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Point of View" />
				<h2 class="text-headline mt-3 font-bold text-ink">Why most events fail</h2>
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

	<!-- Background + strengths -->
	<section class="textured-panel py-section bg-dark-bg">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-[2fr_1fr]">
				<div class="js-gsap-bio">
					<SectionLabel label="Background" dark />
					<h2 class="text-headline mt-4 font-bold text-white">Who I work with</h2>
					<div class="mt-6 space-y-4 text-base leading-relaxed text-white/60">
						<p>
							I've spent 10+ years scaling events and communities in tech — from producing the AI User
							Conference at Fort Mason to running enterprise ecosystem programs with NVIDIA, Google, IBM,
							and Meta. I built the Digital Jungle SF, a physical community venue where startups, builders,
							and partners converge.
						</p>
						<p>
							In 2026 I founded <strong class="text-white">Blooming</strong>, a strategic operating
							layer for tech companies expanding across markets, communities, and narratives — sitting
							between ecosystem strategy, community design, and real-world execution.
						</p>
						<p>
							I work best with Series A+ and growth-stage companies in AI and developer ecosystems —
							especially those operating cross-border — where traditional events no longer create
							differentiation or meaningful engagement.
						</p>
					</div>
				</div>
				<div class="js-gsap-bio space-y-10">
					<div>
						<SectionLabel label="Strengths" dark />
						<ul class="mt-4 space-y-3">
							{#each [
								'Operational velocity',
								'Curation over scale',
								'Narrative design',
								'Cross-border expertise',
								'Developer community strategy',
								'Ecosystem architecture',
								'Partner & sponsor relations',
								'Seamless execution'
							] as skill}
								<li class="flex items-center gap-2 text-sm text-white/60">
									<span class="size-1.5 shrink-0 rounded-full bg-silver-trim"></span>
									{skill}
								</li>
							{/each}
						</ul>
					</div>
					<div>
						<SectionLabel label="Languages" dark />
						<ul class="mt-4 space-y-3">
							{#each ['French', 'English', 'Spanish', 'Portuguese'] as lang}
								<li class="flex items-center gap-2 text-sm text-white/60">
									<span class="size-1.5 shrink-0 rounded-full bg-silver-trim"></span>
									{lang}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Timeline -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Timeline" />
				<h2 class="text-headline mt-3 font-bold text-ink">How I got here</h2>
			</div>
			<div class="grid gap-6 md:grid-cols-3">
				{#each timeline as item, i}
					<div class="js-gsap-timeline-item panel-trim border border-border p-8" data-index={i}>
						<p class="text-xs font-semibold uppercase tracking-widest text-accent">{item.period}</p>
						<h3 class="mt-2 text-base font-bold text-ink">{item.label}</h3>
						<p class="mt-3 text-sm leading-relaxed text-muted">{item.body}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Education -->
	<section class="textured-panel py-section bg-dark-bg">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-[2fr_1fr]">
				<div class="js-gsap-bio">
					<SectionLabel label="Education" dark />
					<h2 class="text-headline mt-4 font-bold text-white">Academic background</h2>
					<div class="mt-8 space-y-8">
						<div>
							<p class="text-xs font-semibold uppercase tracking-widest text-white/40">Sorbonne Nouvelle — Paris 3</p>
							<h3 class="mt-2 text-base font-bold text-white">Master's in Cinema & Audiovisual</h3>
							<p class="mt-2 text-sm leading-relaxed text-white/55">
								Thesis published — <em>L'Arbre à Photos</em>, a multidisciplinary pedagogical device.
								Exchange semester at UFRJ (Rio de Janeiro, Brazil).
							</p>
							<a
								href="https://www.amazon.fr/LArbre-Photos-dispositif-p%C3%A9dagogique-multidisciplinaire/dp/3330866950"
								target="_blank"
								rel="noopener noreferrer"
								class="mt-2 inline-block text-xs font-semibold uppercase tracking-widest text-accent transition-opacity hover:opacity-70"
							>
								View published thesis →
							</a>
						</div>
						<div>
							<p class="text-xs font-semibold uppercase tracking-widest text-white/40">Undergraduate</p>
							<h3 class="mt-2 text-base font-bold text-white">Degrees in Journalism & Anthropology</h3>
							<p class="mt-2 text-sm leading-relaxed text-white/55">Both with honors.</p>
						</div>
					</div>
				</div>
				<div class="js-gsap-bio">
					<SectionLabel label="Continual Learning" dark />
					<ul class="mt-4 space-y-4">
						{#each [
							{ label: 'Women x AI', sub: 'Cohort participant' },
							{ label: 'AI Coding Training', sub: 'Currently enrolled' }
						] as item}
							<li class="panel-trim border border-white/10 p-5">
								<p class="text-sm font-bold text-white">{item.label}</p>
								<p class="mt-1 text-xs text-white/40">{item.sub}</p>
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
			<p class="mt-4 text-lg text-muted">Tell me what you're building.</p>
			<div class="mt-8">
				<Button href="/contact/" size="lg">Get in touch</Button>
			</div>
		</div>
	</section>
</div>
