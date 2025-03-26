<script lang="ts">
	import { type Classes, isSnippet } from '$lib/index.js';
	import type { Component, Snippet } from 'svelte';
	import { LoadingOutlined } from 'svelte-ant-design-icons';
	import { Tween } from 'svelte/motion';

	type Size = 'default' | 'small' | 'large';
	type Type = 'primary' | 'default' | 'dashed' | 'link' | 'text';
	type IconPosition = 'start' | 'end';
	type HTMLType = 'submit' | 'reset' | 'button';
	type Shape = 'default' | 'circle' | 'round';

	type Props = {
		children?: Snippet;
		href?: string;
		target?: string;
		type?: Type;
		danger?: boolean;
		disabled?: boolean;
		ghost?: boolean;
		loading?: boolean;
		icon?: Snippet | Component;
		'icon-position'?: IconPosition;
		'html-type'?: HTMLType;
		size?: Size;
		shape?: Shape;
		class?: string | string[];
		onclick?: (event: MouseEvent) => void;
	};

	let {
		children,
		href,
		target,
		type = 'default',
		icon,
		'icon-position': icon_position = 'start',
		loading = false,
		ghost = false,
		disabled = false,
		danger = false,
		shape = 'default',
		size = 'default',
		class: klass,
		'html-type': html_type = 'button',
		onclick = () => {},
		...props
	}: Props = $props();

	const types: Classes<Type> = {
		dashed: [
			'border border-dashed border-zinc-300',
			'hover:(border-blue-500 text-blue-500)',
			'active:(border-blue-700 text-blue-700)'
		],
		link: ['text-blue-600', 'hover:(text-blue-500)', 'active:(text-blue-700)'],
		primary: ['bg-blue-600 text-white', 'hover:(bg-blue-500)', 'active:(bg-blue-700)'],
		default: [
			'bg-white border border-zinc-300 shadow-md shadow-black/2',
			'hover:(border-blue-500 text-blue-500)',
			'active:(border-blue-700 text-blue-700)'
		],
		text: ['hover:(bg-zinc-200)', 'active:(bg-zinc-300)']
	};

	const danger_types: Classes<Type> = {
		dashed: [
			'border border-dashed border-red-500 text-red-500',
			'hover:(border-red-400 text-red-400)',
			'active:(border-red-600 text-red-600)'
		],
		link: ['text-red-500', 'hover:(text-red-400)', 'active:(text-red-600)'],
		primary: ['bg-red-500 text-white', 'hover:(bg-red-400)', 'active:(bg-red-600)'],
		default: [
			'bg-white text-red-500 border border-red-500 shadow-md shadow-red-900/2',
			'hover:(border-red-400 text-red-400)',
			'active:(border-red-600 text-red-600)'
		],
		text: ['text-red-500', 'hover:(bg-red-50)', 'active:(bg-red-200)']
	};

	const disabled_types: Classes<Type> = {
		dashed: ['border border-dashed border-zinc-300 text-zinc-400 bg-zinc-100'],
		link: ['text-zinc-400'],
		primary: ['bg-zinc-100 text-zinc-400 border border-zinc-300 shadow-md shadow-blue-900/2'],
		default: ['bg-zinc-100 text-zinc-400 border border-zinc-300  shadow-md shadow-red-900/2'],
		text: ['text-zinc-400']
	};

	const sizes: Classes<Size> = {
		default: 'h-8 text-sm',
		small: 'h-6 text-xs',
		large: 'h-10'
	};

	const spacing: Classes<Size> = {
		default: 'px-3 gap-2',
		small: 'px-1.5 gap-1.5',
		large: 'px-3 gap-2'
	};

	const padding_left = new Tween(size === 'small' ? 0.5 : 0.75, { duration: 150 });

	$effect(() => {
		if (icon) return;
		if (!children || !loading) {
			padding_left.target = size === 'small' ? 0.5 : 0.75;
			return;
		}

		padding_left.target = 2;
	});
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={[
		'transition flex items-center relative',
		disabled ? disabled_types[type] : danger ? danger_types[type] : types[type],
		sizes[size],
		icon_position === 'end' && 'flex-row-reverse',
		icon && !children ? 'aspect-square justify-center px-0' : spacing[size],
		shape === 'default' ? 'rounded-md' : 'rounded-full',
		shape === 'circle' && 'aspect-square px-0',
		loading && 'cursor-wait',
		disabled && 'cursor-not-allowed',
		klass
	]}
	role={html_type}
	type={html_type}
	{href}
	{target}
	onclick={(e: MouseEvent) => {
		if (loading || disabled) return;
		onclick(e);
	}}
	style:padding-left="{!icon || (!!icon && children) ? padding_left.current : 0}rem"
	{...props}
>
	{#if icon}
		<span class="size-4 relative grid place-items-center">
			<span class={['transition', loading ? 'opacity-0' : '']}>
				{#if isSnippet(icon)}
					{@render icon()}
				{:else}
					{@const Icon = icon}
					<Icon class="size-4"></Icon>
				{/if}
			</span>

			{@render throbber()}
		</span>
	{/if}

	{#if !icon}
		{@render throbber('left-2')}
	{/if}

	{#if children}
		{@render children()}
	{/if}
</svelte:element>

{#snippet throbber(c?: string)}
	<LoadingOutlined
		class={['absolute animate-spin size-4 pointer-events-none', loading ? '' : 'opacity-0', c]}
	/>
{/snippet}
