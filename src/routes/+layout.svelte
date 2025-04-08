<script lang="ts">
	import Space from '$lib/components/space.svelte';
	import '@unocss/reset/tailwind.css';
	import 'virtual:uno.css';

	const { children } = $props();
</script>

{@render children()}
