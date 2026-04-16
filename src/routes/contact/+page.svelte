<script lang="ts">
	import { onMount } from 'svelte';
	import { withGsapContext } from '$lib';
	import SectionLabel from '$lib/components/SectionLabel.svelte';

	const faqs = [
		{
			q: 'How do engagements typically work?',
			a: 'Most engagements are project-based with a defined scope — from a single flagship event to a multi-event series or ecosystem program. I work closely with your team from strategy through execution.'
		},
		{
			q: 'Do you work internationally?',
			a: 'Yes. Blooming operates across US, Europe, and LatAm with local understanding. Cross-border expansion is a core part of what we do — not an add-on.'
		},
		{
			q: 'What stage of company do you work with?',
			a: "Primarily Series A+ and growth-stage companies in AI and developer ecosystems. If you're scaling fast and need ecosystem infrastructure that matches your ambition, let's talk."
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
	<meta name="description" content="Get in touch. Let's build something together." />
</svelte:head>

<div bind:this={page}>
	<!-- Page hero -->
	<section class="textured-panel bg-dark-bg pb-section pt-section">
		<div class="mx-auto max-w-6xl px-6 lg:px-8" style="padding-top: 6rem;">
			<SectionLabel label="Contact" dark />
			<h1 class="js-gsap-page-title text-hero mt-4 font-black text-white">
				Let's build something <span class="text-metallic">together.</span>
			</h1>
			<p class="js-gsap-page-sub mt-6 max-w-lg text-lg leading-relaxed text-white/55">
				The best ecosystems are built by someone in the room who understands the stakes, the people, and the signal.
			</p>
		</div>
	</section>

	<!-- Contact details -->
	<section class="py-section bg-surface">
		<div class="mx-auto max-w-6xl px-6 lg:px-8">
			<div class="grid gap-12 md:grid-cols-2">
				<!-- Contact info -->
				<div class="js-gsap-contact-block space-y-6">
					<div>
						<SectionLabel label="Email" />
						<a
							href="mailto:alison@weareblooming.co"
							class="mt-4 block text-2xl font-bold text-ink transition-colors hover:text-accent-dark"
						>
							alison@weareblooming.co
						</a>
					</div>
					<div>
						<SectionLabel label="Phone" />
						<a
							href="tel:+16282208079"
							class="mt-4 block text-xl font-bold text-ink transition-colors hover:text-accent-dark"
						>
							+1 628 220 8079
						</a>
					</div>
					<div>
						<SectionLabel label="Website" />
						<a
							href="https://weareblooming.co"
							target="_blank"
							rel="noopener noreferrer"
							class="mt-4 block text-xl font-bold text-ink transition-colors hover:text-accent-dark"
						>
							weareblooming.co
						</a>
					</div>
					<p class="text-sm text-muted">SF-based · Global reach across US, Europe & LatAm</p>
				</div>

				<!-- What to include -->
				<div class="js-gsap-contact-block panel-trim border border-border p-8">
					<SectionLabel label="What to include" />
					<ul class="mt-4 space-y-3">
						{#each [
							'What you\'re building and what market or geography you\'re targeting',
							'The event or community challenge you\'re trying to solve',
							'Your timeline and any hard deadlines',
							'Company stage and whether you need strategy, execution, or both'
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
