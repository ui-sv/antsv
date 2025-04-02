<script lang="ts">
	import type { Classes } from '$lib/index.js';
	import type { Component, Snippet } from 'svelte';

	type Align = 'start' | 'end' | 'center' | 'baseline';
	type Direction = 'vertical' | 'horizontal';
	type Size = 'small' | 'medium' | 'large' | number;

	type Props = {
		align?: Align;
		direction?: Direction;
		size?: Size | [number, number];
		split?: Snippet | Component | string;
		wrap?: boolean;
		children?: Snippet;
	};

	const {
		align,
		direction = 'horizontal',
		size = 'small',
		split,
		wrap = false,
		children
	}: Props = $props();

	const alignments: Classes<Align> = {
		baseline: '',
		center: '',
		end: '',
		start: ''
	};

	const sizes: Classes<Size> = {
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
		!number_sizing && sizes[size as Size],
		align && alignments[align],
		direction === 'vertical' && 'flex-col'
	]}
	style:gap
>
	{@render children?.()}
</div>
