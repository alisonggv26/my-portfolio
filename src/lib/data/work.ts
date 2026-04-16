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
	link?: string;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'aiuc-fort-mason',
		title: 'AI User Conference at Fort Mason',
		client: 'BeMyApp',
		engagement: 'Speaker Curation & Lead Operator · 2025',
		challenge:
			'Scale the AI User Group from monthly SF meetups to a flagship conference at Fort Mason — curated speakers, immersive experience, and production quality that matched the ambition of the community.',
		outcome:
			'Produced a sold-out conference at Fort Mason. 15k+ builders engaged across the AIUG ecosystem, establishing it as a go-to event for the AI engineering community in SF.',
		tags: ['Conference Production', 'Speaker Curation', 'Community Growth', 'AI Ecosystem'],
		featured: true,
		year: 2025,
		link: 'https://www.linkedin.com/posts/alison-granger-ganansia_aiuc25-video-recap-activity-7325974527123857410-b42u?utm_source=share&utm_medium=member_desktop'
	},
	{
		slug: 'enterprise-ai-activations',
		title: 'Enterprise AI Ecosystem Programs',
		client: 'NVIDIA · Google · IBM · Meta · Miro',
		engagement: 'Strategic Operator · 2023–2026',
		challenge:
			'Large-scale tech companies needed sustained developer engagement — not one-off events, but narrative arcs that connected product launches to real community momentum across the AI ecosystem.',
		outcome:
			'Designed multi-event series as continuous engagement loops — connecting product launches, developer education, and community building into programs that outlasted the events themselves.',
		tags: ['Ecosystem Strategy', 'Developer Programs', 'Enterprise', 'Narrative Design'],
		featured: true,
		year: 2024
	},
	{
		slug: 'datadog-hackathon',
		title: 'DataDog AI Agent Hackathon',
		client: 'DataDog',
		engagement: 'Lead Operator · 2024',
		challenge:
			'Design and run a high-signal hackathon for 150+ builders focused on AI agents — attracting qualified engineers, not just curious attendees, and delivering a technically rigorous experience.',
		outcome:
			'150+ builders participated. High signal-to-noise ratio achieved through intentional curation — technical audience, real tools, real output.',
		tags: ['Hackathon', 'AI Agents', 'Developer Events', 'Curation'],
		featured: false,
		year: 2024,
		link: 'https://www.linkedin.com/posts/alison-granger-ganansia_nyc-just-before-the-snowstorm-hackathon-ugcPost-7434420391764348928-lQ5-?utm_source=share&utm_medium=member_desktop'
	},
	{
		slug: 'intercom-ai-hackathon',
		title: 'Intercom AI Hackathon',
		client: 'Intercom',
		engagement: 'Lead Operator · 2024',
		challenge:
			'Produce a premium AI hackathon with a $25k prize pool that attracted serious builders and generated real product outcomes, not just demo-day theater.',
		outcome:
			'Delivered a $25k prize hackathon with strong technical participation, high-quality submissions, and measurable community momentum for Intercom\'s developer ecosystem.',
		tags: ['Hackathon', 'Developer Community', 'AI', 'Prize Events'],
		featured: false,
		year: 2024,
		link: 'https://www.linkedin.com/posts/ronstedt_last-friday-i-got-to-mc-an-ai-hackathon-at-activity-7426622655480414208-8sam?utm_source=share&utm_medium=member_desktop'
	},
	{
		slug: 'aiug-community-scale',
		title: 'Scaling AI User Group from Zero',
		client: 'BeMyApp',
		engagement: 'Event Producer · 2022–2025',
		challenge:
			'Build a developer community from launch — from the very first SF meetup through recurring monthly programming, a national workshop tour, and two large-scale conferences.',
		outcome:
			'Scaled AIUG into a thriving ecosystem with monthly programming, a 5-city AI engineering workshop tour, 2 major SF conferences, and 15k+ builders engaged across 80+ curated events.',
		tags: ['Community Building', 'Event Production', 'Developer Relations', 'AI'],
		featured: false,
		year: 2022,
		link: 'https://www.youtube.com/@aiusergroup'
	},
	{
		slug: 'pipelex-developer-meetup',
		title: 'Pipelex Developer Meetup',
		client: 'Pipelex',
		engagement: 'Community Lead · 2024',
		challenge:
			'Attract 60+ qualified AI engineers — not just tech-curious attendees — for a focused developer meetup around LLM tooling and agent workflows.',
		outcome:
			'60 qualified AI engineers in the room. High-trust environment that generated real product feedback and ecosystem credibility for Pipelex.',
		tags: ['Developer Meetup', 'AI Agents', 'LLM', 'Qualified Curation'],
		featured: false,
		year: 2024,
		link: 'https://www.linkedin.com/posts/laurentfarci_aiagents-llm-developertools-ugcPost-7432899617987420160-tRgq?utm_source=share&utm_medium=member_desktop'
	}
];
