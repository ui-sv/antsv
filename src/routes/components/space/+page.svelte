<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Space from '$lib/components/space.svelte';
</script>

<svelte:head>
	<title>Space - Ant Design Svelte</title>
</svelte:head>

<Space direction="vertical">
	<Space>
		<Button type="primary">primary</Button>
		<Button type="default">default</Button>
		<Button type="dashed">dashed</Button>
		<Button type="text">text</Button>
		<Button type="link">link</Button>
	</Space>

	<Space size="medium">
		<Button type="primary">primary</Button>
		<Button type="default">default</Button>
		<Button type="dashed">dashed</Button>
		<Button type="text">text</Button>
		<Button type="link">link</Button>
	</Space>

	<Space size="large">
		<Button type="primary">primary</Button>
		<Button type="default">default</Button>
		<Button type="dashed">dashed</Button>
		<Button type="text">text</Button>
		<Button type="link">link</Button>
	</Space>

	<Space>
		<Button type="primary">primary</Button>
		<Button type="default">default</Button>
		<Button type="dashed">dashed</Button>
		<Button type="text">text</Button>
		<Button type="link">link</Button>
	</Space>
</Space>
