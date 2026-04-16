<script lang="ts">
	interface Props {
		label: string;
		dark?: boolean;
	}

	let { label, dark = false }: Props = $props();
</script>

<span
	class="inline-block text-xs font-semibold uppercase tracking-widest {dark
		? 'text-white/50'
		: 'text-muted'}"
>
	{label}
</span>
