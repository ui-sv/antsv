<script lang="ts">
	import type { Classes } from '$lib/index.js';
	import { Switch, useId } from 'bits-ui';
	import type { Snippet } from 'svelte';
	import { LoadingOutlined } from 'svelte-ant-design-icons';
	import type { ClassValue } from 'svelte/elements';

	type Size = 'small' | 'default';

	type Props = {
		'auto-focus'?: boolean;
		value?: boolean;
		checked?: Snippet;
		unchecked?: Snippet;
		loading?: boolean;
		size?: Size;
		onchange?: (value: boolean) => void;
		class?: string | string[];
		disabled?: boolean;
	};

	let {
		checked,
		unchecked,
		'auto-focus': auto_focus = false,
		loading = false,
		disabled = false,
		value = $bindable(false),
		onchange = () => {},
		size = 'default',
		class: klass,
		...props
	}: Props = $props();

	let id = useId();
	let widthie = $state(false);

	const sizes_thumb: Classes<Size> = $derived({
		default: [
			'size-4.5',
			'data-[state=unchecked]:()',
			'data-[state=checked]:(translate-x-5.5)',
			widthie ? 'w-6' : '',
			value && widthie ? '-m-1.5' : ''
		],
		small: [
			'size-3',
			'data-[state=unchecked]:()',
			'data-[state=checked]:(translate-x-4)',
			widthie ? 'w-4' : '',
			value && widthie ? '-m-1' : ''
		]
	});

	const classes_root = $derived.by(() => {
		const res: ClassValue = [
			'rounded-full relative flex p-2px items-center cursor-pointer transition',
			size === 'default' ? 'h-5.5 w-11' : 'h-4 w-8'
		];

		if (disabled) {
			res.push(value ? 'bg-blue-500' : 'bg-zinc-300', 'cursor-not-allowed');
		} else if (loading) {
			res.push(value ? 'bg-blue-600 hover:(bg-blue-500)' : 'bg-zinc-400 hover:(bg-zinc-500)');
		} else {
			res.push(value ? 'bg-blue-600 hover:(bg-blue-500)' : 'bg-zinc-400 hover:(bg-zinc-500)');
		}

		res.push(klass);

		return res;
	});
</script>

<Switch.Root
	{id}
	class={classes_root}
	bind:checked={
		() => value,
		(v) => {
			if (loading || disabled) return;
			value = v;
		}
	}
	{disabled}
	onmousedown={() => (widthie = true)}
	{...props}
>
	<Switch.Thumb
		class={[
			'pointer-events-none block shrink-0 rounded-full transition-all bg-white shadow shadow-black/10 relative flex items-center justify-center',
			'dark:(border-background/30 bg-foreground shadow-popover)',
			...sizes_thumb[size]
		]}
	>
		{#if loading}
			<LoadingOutlined class={['animate-spin', size === 'default' ? 'size-4' : 'size-2.5']} />
		{/if}
	</Switch.Thumb>
</Switch.Root>

<svelte:window onmouseup={() => (widthie = false)} />
