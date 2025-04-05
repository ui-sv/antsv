<script lang="ts">
	import type { Snippet } from 'svelte';
	import Button, { type Props as ButtonProps } from '$lib/components/button.svelte';
	import { Tooltip } from 'bits-ui';
	import { isSnippet } from '$lib/index.js';
	import type { ClassValue } from 'svelte/elements';

	type Align = 'start' | 'end' | 'center' | 'baseline';
	type Trigger = 'hover' | 'focus' | 'click' | 'contextmenu';

	type Props = {
		title?: string | Snippet;
		align?: Align;
		arrow?: boolean;
		'arrow-point-center'?: boolean;
		'auto-adjust-overflow'?: boolean;
		color?: string;
		'destroy-on-hide'?: boolean;
		container?: HTMLElement;
		children: Snippet;
		'leave-delay'?: number;
		'enter-delay'?: number;
		class?: ClassValue;
		trigger?: Trigger;
		type?: 'button';
		button?: ButtonProps;
	};

	const {
		children,
		title,
		align,
		arrow,
		'arrow-point-center': arrow_point_center,
		'auto-adjust-overflow': auto_adjust_overflow,
		'destroy-on-hide': destroy_on_hide,
		color,
		container,
		class: klass,
		trigger = 'hover',
		button: btn_prop,
		type
	}: Props = $props();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		{#if type !== 'button'}
			<Tooltip.Trigger>
				{@render children()}
			</Tooltip.Trigger>
		{:else}
			<Tooltip.Trigger>
				{#snippet child({ props })}
					<Button {...{ ...props, type: undefined }} {...btn_prop}>
						{@render children()}
					</Button>
				{/snippet}
			</Tooltip.Trigger>
		{/if}

		<Tooltip.Portal>
			<Tooltip.Content class={[]}>
				<Tooltip.Arrow />

				{#if typeof title == 'string'}
					{title}
				{:else if title && isSnippet(title)}
					{@render title()}
				{/if}
			</Tooltip.Content>
		</Tooltip.Portal>
	</Tooltip.Root>
</Tooltip.Provider>
