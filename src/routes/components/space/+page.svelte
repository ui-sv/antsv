<script lang="ts">
	import { base } from '$app/paths';
	import Button from '$lib/components/button.svelte';
	import Space from '$lib/components/space.svelte';
</script>

<svelte:head>
	<title>Space - Ant Design Svelte</title>
</svelte:head>

<Space direction="vertical">
	<Space>{@render base_buttons()}</Space>
	<Space size="medium">{@render base_buttons()}</Space>
	<Space size="large">{@render base_buttons()}</Space>
	<Space>{@render base_buttons()}</Space>
	<Space wrap>
		{#each Array(20) as index}
			<Button>default</Button>
		{/each}
	</Space>
	<Space compact>{@render base_buttons()}</Space>
</Space>

{#snippet base_buttons()}
	<Button type="primary">primary</Button>
	<Button type="default">default</Button>
	<Button type="dashed">dashed</Button>
	<Button type="text">text</Button>
	<Button type="link">link</Button>
{/snippet}
