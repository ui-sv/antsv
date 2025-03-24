<script lang="ts">
	import Button from './button.svelte';
	import { SearchOutlined, DownloadOutlined } from 'svelte-ant-design-icons';

	let loading = $state([false, false]);
	let unload = $state<number[]>([]);
	const load = (idx: number) => (loading[idx] = true);

	$effect(() => {
		for (const [idx, v] of loading.entries()) {
			if (!v) continue;
			if (unload.includes(idx)) continue;
			unload.push(idx);

			setTimeout(() => {
				loading[idx] = false;
				unload.pop();
			}, 2500);
		}
	});
</script>

{unload}WJnsYAjsyYe4L4s

<div class="flex flex-wrap gap-2 p-4">
	<Button>default button</Button>
	<Button type="primary">primary button</Button>
	<Button type="dashed">dashed button</Button>
	<Button type="text">text button</Button>
	<Button type="link">link button</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button icon={SearchOutlined} shape="circle" type="primary" />
	<Button shape="circle" type="primary">A</Button>
	<Button icon={SearchOutlined} type="primary">Search</Button>

	<Button icon={SearchOutlined} shape="circle" />
	<Button shape="circle">A</Button>
	<Button icon={SearchOutlined}>Search</Button>

	<Button icon={SearchOutlined} shape="circle" type="dashed" />
	<Button shape="circle" type="dashed">A</Button>
	<Button icon={SearchOutlined} type="dashed">Search</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button icon={DownloadOutlined} type="primary" size="small" />
	<Button icon={DownloadOutlined} type="primary" size="small" shape="circle" />
	<Button icon={DownloadOutlined} type="primary" size="small" shape="round">Download</Button>
	<Button icon={DownloadOutlined} type="primary" size="small">Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button icon={DownloadOutlined} type="primary" />
	<Button icon={DownloadOutlined} type="primary" shape="circle" />
	<Button icon={DownloadOutlined} type="primary" shape="round">Download</Button>
	<Button icon={DownloadOutlined} type="primary">Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button icon={DownloadOutlined} type="primary" size="large" />
	<Button icon={DownloadOutlined} type="primary" size="large" shape="circle" />
	<Button icon={DownloadOutlined} type="primary" size="large" shape="round">Download</Button>
	<Button icon={DownloadOutlined} type="primary" size="large">Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button
		loading={loading[0]}
		icon={DownloadOutlined}
		type="primary"
		size="small"
		onclick={() => load(0)}
	/>
	<Button
		loading={loading[0]}
		icon={DownloadOutlined}
		type="primary"
		size="small"
		shape="circle"
		onclick={() => load(0)}
	/>
	<Button
		loading={loading[0]}
		icon={DownloadOutlined}
		type="primary"
		size="small"
		shape="round"
		onclick={() => load(0)}
	>
		Download
	</Button>
	<Button
		loading={loading[0]}
		icon={DownloadOutlined}
		type="primary"
		size="small"
		onclick={() => load(0)}
	>
		Download
	</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button loading={loading[0]} icon={DownloadOutlined} type="primary" />
	<Button loading={loading[0]} icon={DownloadOutlined} type="primary" shape="circle" />
	<Button loading={loading[0]} icon={DownloadOutlined} type="primary" shape="round">
		Download
	</Button>
	<Button loading={loading[0]} icon={DownloadOutlined} type="primary">Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button loading icon={DownloadOutlined} type="primary" size="large" />
	<Button loading icon={DownloadOutlined} type="primary" size="large" shape="circle" />
	<Button loading icon={DownloadOutlined} type="primary" size="large" shape="round">
		Download
	</Button>
	<Button loading icon={DownloadOutlined} type="primary" size="large">Download</Button>
</div>
