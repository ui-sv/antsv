<script lang="ts">
	import Button from '$lib/components/button.svelte';
	import Space from '$lib/components/space.svelte';
	import Tooltip from '$lib/components/tooltip.svelte';
</script>

<div class="p-8">
	<Space>
		<Tooltip title="testing testing">
			<Button>default button</Button>
		</Tooltip>
	</Space>
</div>
