<script lang="ts">
	import Button from './button.svelte';
	import type { TooltipProps } from './types.js';
	import { Tooltip } from 'bits-ui';
	import { isSnippet } from '$lib/index.js';

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
	}: TooltipProps = $props();
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
