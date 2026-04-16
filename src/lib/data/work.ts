export interface CaseStudy {
	slug: string;
	title: string;
	client: string;
	engagement: string;
	challenge: string;
	outcome: string;
	tags: string[];
	featured: boolean;
	year: number;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'payments-platform',
		title: 'Untangling a Payments Platform',
		client: 'Series B Fintech',
		engagement: 'Product Strategy · 5 months',
		challenge:
			'Three product teams shipping conflicting features with no shared north star. The roadmap was a negotiation, not a plan.',
		outcome: 'Unified product vision and OKR framework adopted org-wide; reduced planning cycle from 8 weeks to 2.',
		tags: ['Discovery', 'OKR Design', 'Roadmap', 'Stakeholder Alignment'],
		featured: true,
		year: 2024
	},
	{
		slug: 'growth-loop-redesign',
		title: 'Rebuilding a Growth Loop',
		client: 'B2B SaaS (Series A)',
		engagement: 'Growth Strategy · 3 months',
		challenge:
			'Activation rate stalling at 22%. The product team had ideas but no structured way to prioritize experiments.',
		outcome: 'Activation rate lifted to 41% in 90 days through a structured experiment backlog and weekly review cadence.',
		tags: ['Growth', 'Experimentation', 'Activation', 'Analytics'],
		featured: true,
		year: 2024
	},
	{
		slug: 'market-entry',
		title: 'Market Entry for a Healthcare Tool',
		client: 'Digital Health Startup',
		engagement: 'GTM Strategy · 4 months',
		challenge:
			"First-time founder with a strong product and no go-to-market plan. Needed a clear path to first 100 customers.",
		outcome: 'Launched in two target verticals; 87 paying customers in the first 60 days of availability.',
		tags: ['GTM', 'Positioning', 'ICP Definition', 'Sales Enablement'],
		featured: false,
		year: 2023
	},
	{
		slug: 'platform-consolidation',
		title: 'Consolidating a Fragmented Platform',
		client: 'Enterprise SaaS',
		engagement: 'Product Strategy · 6 months',
		challenge:
			'A decade of acquisitions left five separate products with overlapping features, competing sales motions, and confused buyers.',
		outcome:
			'Delivered a unified platform narrative and 18-month consolidation roadmap; reduced sales cycle by 30%.',
		tags: ['Platform Strategy', 'Roadmap', 'Positioning', 'Discovery'],
		featured: false,
		year: 2023
	}
];
