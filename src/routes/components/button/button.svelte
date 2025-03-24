<script lang="ts">
	import { type Classes, isSnippet } from '$lib/index.js';
	import type { Component, Snippet } from 'svelte';
	import { LoadingOutlined } from 'svelte-ant-design-icons';

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
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	class={[
		'transition flex items-center relative',
		types[type],
		sizes[size],
		icon_position === 'end' && 'flex-row-reverse',
		icon && !children ? 'aspect-square justify-center px-0' : spacing[size],
		shape === 'default' ? 'rounded-md' : 'rounded-full',
		shape === 'circle' && 'aspect-square px-0',
		loading && 'cursor-wait',
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

			<LoadingOutlined
				class={['absolute animate-spin size-4 transition', loading ? '' : 'opacity-0']}
			/>
		</span>
	{/if}

	{#if !icon && loading}
		<span
			class={[
				'absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2',
				icon_position === 'start' ? 'left-4' : 'right-4'
			]}
		>
			<LoadingOutlined class="animate-spin size-4" />
		</span>
	{/if}

	{#if children}
		{@render children()}
	{/if}
</svelte:element>
