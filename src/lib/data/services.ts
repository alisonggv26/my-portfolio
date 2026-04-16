export interface Service {
	id: string;
	title: string;
	description: string;
	deliverables: string[];
	highlighted: boolean;
}

export const services: Service[] = [
	{
		id: 'product-strategy',
		title: 'Product Strategy',
		description:
			'From fuzzy problem space to crisp roadmap. I work with founders and product leaders to cut through noise and build plans that actually ship.',
		deliverables: ['Product vision & principles', 'Opportunity sizing', 'Prioritised roadmap', 'OKR framework'],
		highlighted: true
	},
	{
		id: 'discovery',
		title: 'Discovery & Research',
		description:
			'I run structured discovery to replace assumptions with evidence — quickly, and without months of research overhead.',
		deliverables: [
			'User interviews',
			'Jobs-to-be-done analysis',
			'Competitive landscape',
			'Insight synthesis'
		],
		highlighted: false
	},
	{
		id: 'gtm',
		title: 'Go-to-Market Strategy',
		description:
			"Positioning, ICP definition, and a launch plan built for teams that can't afford to guess.",
		deliverables: [
			'ICP & segment definition',
			'Messaging framework',
			'Channel strategy',
			'Launch playbook'
		],
		highlighted: false
	},
	{
		id: 'org-design',
		title: 'Team & Process Design',
		description:
			'Scaling fast but things are breaking? I help product orgs build the processes that let them move with confidence, not chaos.',
		deliverables: [
			'Team topology review',
			'Decision frameworks',
			'Rituals & meeting design',
			'RACI mapping'
		],
		highlighted: false
	}
];
