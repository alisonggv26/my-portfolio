<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import { site } from '$lib/data/index';
	import SectionLabel from '$lib/components/SectionLabel.svelte';

	const faqs = [
		{
			q: 'How do engagements typically work?',
			a: 'Most engagements are project-based with a defined scope and timeline — usually 4 to 12 weeks. I work async-first with structured check-ins, so I integrate without disrupting your team.'
		},
		{
			q: 'What does availability look like?',
			a: "I take on two to three clients at a time. If I'm fully booked, I'll tell you — and give you an honest timeline for when I'm next available."
		},
		{
			q: 'Do you work with early-stage companies?',
			a: "Yes. A lot of my best work happens before a company has a full product team. If you're pre-Series A and the problem is real, let's talk."
		}
	];

	let page: HTMLElement;

	onMount(() => {
		return withGsapContext(page, (gsap) => {
			gsap.set('.js-gsap-page-title, .js-gsap-page-sub', { y: 30, opacity: 0 });
			gsap.set('.js-gsap-contact-block', { y: 35, opacity: 0 });

			gsap
				.timeline({ defaults: { ease: 'power3.out' } })
				.to('.js-gsap-page-title', { y: 0, opacity: 1, duration: 0.65 })
				.to('.js-gsap-page-sub', { y: 0, opacity: 1, duration: 0.5 }, '-=0.3')
				.to('.js-gsap-contact-block', { y: 0, opacity: 1, duration: 0.5, stagger: 0.12 }, '-=0.2');
		});
	});
</script>

<svelte:head>
	<title>Contact — Alison Granger</title>
	<meta name="description" content="Get in touch. Tell me about the problem." />
</svelte:head>

<div bind:this={page}>
	<!-- Page hero -->
	<section class="textured-panel bg-dark-bg pb-section pt-section">
		<div class="mx-auto max-w-6xl px-6 lg:px-8" style="padding-top: 6rem;">
			<SectionLabel label="Contact" dark />
			<h1 class="js-gsap-page-title text-hero mt-4 font-black text-white">
				Let's <span class="text-metallic">talk.</span>
			</h1>
			<p class="js-gsap-page-sub mt-6 max-w-lg text-lg leading-relaxed text-white/55">
				Tell me about the problem. I'll tell you if I can help — and if I can't, I'll
				point you toward someone who can.
			</p>
		</div>
	</section>

	<!-- Contact details + what to include -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-2">
				<!-- Email -->
				<div class="js-gsap-contact-block">
					<SectionLabel label="Reach me at" />
					<a
						href="mailto:{site.email}"
						class="mt-4 block text-2xl font-bold text-ink transition-colors hover:text-accent-dark"
					>
						{site.email}
					</a>
					<p class="mt-3 text-sm text-muted">I respond within one business day.</p>
				</div>

				<!-- What to include -->
				<div class="js-gsap-contact-block panel-trim border border-border p-8">
					<SectionLabel label="What to include" />
					<ul class="mt-4 space-y-3">
						{#each [
							'A brief description of the problem — not the solution you have in mind, the problem itself',
							'Your rough timeline and whether there is a hard deadline',
							'Whether you\'ve tried to solve this before and what happened',
							'Your company stage and team size (ballpark is fine)'
						] as item}
							<li class="flex items-start gap-3 text-sm leading-relaxed text-muted">
								<span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"></span>
								{item}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="textured-panel py-section bg-dark-bg">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="mb-12">
				<SectionLabel label="Common questions" dark />
				<h2 class="text-headline mt-3 font-bold text-white">Before you write</h2>
			</div>
			<div class="grid gap-6 md:grid-cols-3">
				{#each faqs as faq, i}
					<div class="js-gsap-contact-block panel-trim border border-white/10 p-8" data-index={i}>
						<h3 class="text-sm font-bold text-white">{faq.q}</h3>
						<p class="mt-3 text-sm leading-relaxed text-white/55">{faq.a}</p>
					</div>
				{/each}
			</div>
		</div>
	</section>
</div>
