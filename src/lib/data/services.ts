export interface Service {
	id: string;
	title: string;
	description: string;
	deliverables: string[];
	highlighted: boolean;
}

export const services: Service[] = [
	{
		id: 'event-strategy',
		title: 'Event Strategy & Positioning',
		description:
			'Multi-event series designed as sustained narrative arcs — not one-off activations. Aligned to business objectives and built to create momentum across developer and startup ecosystems.',
		deliverables: [
			'Multi-event series aligned to business objectives',
			'Narrative architecture that builds momentum',
			'Audience mapping and community segmentation',
			'Post-event storytelling and amplification'
		],
		highlighted: true
	},
	{
		id: 'community-architecture',
		title: 'Community Architecture',
		description:
			'Ecosystem design for companies entering new markets and geographies. Builds the infrastructure for repeated, high-trust interactions — not a mailing list, but a living network.',
		deliverables: [
			'Ecosystem design for new markets and geographies',
			'Community lead recruitment and training',
			'Curation and signal-to-noise optimization',
			'Scalable community programming'
		],
		highlighted: false
	},
	{
		id: 'full-execution',
		title: 'Full Execution',
		description:
			'End-to-end operations from concept to post-event. Every logistical detail handled — so the team can focus on the relationships being built in the room.',
		deliverables: [
			'End-to-end operations and logistics',
			'On-site production and community management',
			'Attendee curation and experience design',
			'Livestream production and social amplification'
		],
		highlighted: false
	},
	{
		id: 'ecosystem-programs',
		title: 'Ecosystem Programs',
		description:
			'Developer programs and international expansion work for companies scaling across borders — especially in AI and developer ecosystems where traditional events no longer create differentiation.',
		deliverables: [
			'Developer programs and partnerships',
			'Sponsorship strategy and partner alignment',
			'International expansion programs',
			'Cross-border community infrastructure'
		],
		highlighted: false
	}
];
