<script lang="ts">
	import type { Classes } from '$lib/index.js';
	import { setContext } from 'svelte';
	import type { SpaceProps, SpaceSize, SpaceAlign, SpaceDirection } from './types.js';
	import { setSpaceContext } from './contexts.js';

	let {
		align,
		split,
		children,
		direction = 'horizontal',
		size = 'small',
		wrap = false,
		compact = false
	}: SpaceProps = $props();
	const id = $props.id();

	let context = $state({
		align,
		direction,
		size,
		wrap,
		compact,
		split,
		items: [] as string[]
	});
	setSpaceContext(context);

	const alignments: Classes<SpaceAlign> = {
		baseline: '',
		center: '',
		end: '',
		start: ''
	};

	const sizes: Classes<SpaceSize> = {
		large: 'gap-6',
		medium: 'gap-4',
		small: 'gap-2'
	};

	const number_sizing = $derived(Array.isArray(size) || typeof size === 'number');
	const gap = $derived.by(() => {
		if (Array.isArray(size)) return `${size[0]}px ${size[1]}px`;
		else if (typeof size === 'number') return `${size}px`;

		return undefined;
	});
</script>

<div
	class={[
		'flex',
		!number_sizing && !compact && sizes[size as SpaceSize],
		align && alignments[align],
		direction === 'vertical' && 'flex-col',
		wrap && 'flex-wrap'
	]}
	style:gap
>
	{@render children?.()}
</div>
