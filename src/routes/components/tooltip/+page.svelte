<script lang="ts">
	import Space from '$lib/components/space.svelte';
	import Tooltip from '$lib/components/tooltip.svelte';

	let loading = $state(false);
</script>

<div class="p-8">
	<Space direction="vertical">
		<Tooltip title="testing testing">hover over this text</Tooltip>
		<Tooltip title="testing testing 2" type="button">a button style tooltip</Tooltip>
		<Tooltip
			title="testing testing 3"
			type="button"
			button={{
				loading: loading,
				onclick() {
					loading = true;
					setTimeout(() => (loading = false), 2500);
				}
			}}
		>
			with loading
		</Tooltip>
		<Tooltip title="testing testing 4">hover over this text</Tooltip>
		<Tooltip title="testing testing 5">hover over this text</Tooltip>
	</Space>
</div>
