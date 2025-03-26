<script lang="ts">
	import Button from './button.svelte';
	import { SearchOutlined, DownloadOutlined } from 'svelte-ant-design-icons';

	let loading = $state([]);
	let unload = $state<number[]>([]);
	const load = (idx: number) => (loading[idx] = true);

	$effect(() => {
		for (const [idx, v] of loading.entries()) {
			if (!v) continue;
			if (unload.includes(idx)) continue;
			unload.push(idx);

			setTimeout(() => {
				loading[idx] = false;
				unload.shift();
			}, 2500);
		}
	});
</script>

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
	<Button loading={loading[0]} type="primary" size="small" onclick={() => load(0)}>Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button loading={loading[1]} icon={DownloadOutlined} type="primary" onclick={() => load(1)} />
	<Button
		loading={loading[1]}
		icon={DownloadOutlined}
		type="primary"
		shape="circle"
		onclick={() => load(1)}
	/>
	<Button
		loading={loading[1]}
		icon={DownloadOutlined}
		type="primary"
		shape="round"
		onclick={() => load(1)}
	>
		Download
	</Button>
	<Button loading={loading[1]} icon={DownloadOutlined} type="primary" onclick={() => load(1)}>
		Download
	</Button>
	<Button loading={loading[1]} type="primary" onclick={() => load(1)}>Download</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button
		loading={loading[2]}
		icon={DownloadOutlined}
		type="primary"
		size="large"
		onclick={() => load(2)}
	/>
	<Button
		loading={loading[2]}
		icon={DownloadOutlined}
		type="primary"
		size="large"
		shape="circle"
		onclick={() => load(2)}
	/>
	<Button
		loading={loading[2]}
		icon={DownloadOutlined}
		type="primary"
		size="large"
		shape="round"
		onclick={() => load(2)}
	>
		Download
	</Button>
	<Button
		loading={loading[2]}
		icon={DownloadOutlined}
		type="primary"
		size="large"
		onclick={() => load(2)}
	>
		Download
	</Button>
	<Button loading={loading[2]} type="primary" size="large" onclick={() => load(2)}>Download</Button>
</div>

<!-- DANGER -->

<div class="flex flex-wrap gap-2 p-4">
	<Button danger>default button</Button>
	<Button danger type="primary">primary button</Button>
	<Button danger type="dashed">dashed button</Button>
	<Button danger type="text">text button</Button>
	<Button danger type="link">link button</Button>
</div>

<div class="flex flex-wrap gap-2 p-4">
	<Button loading={loading[3]} icon={DownloadOutlined} danger onclick={() => load(3)} />
	<Button
		loading={loading[3]}
		icon={DownloadOutlined}
		shape="circle"
		danger
		onclick={() => load(3)}
	/>
	<Button loading={loading[3]} icon={DownloadOutlined} shape="round" danger onclick={() => load(3)}>
		Download
	</Button>
	<Button loading={loading[3]} icon={DownloadOutlined} danger onclick={() => load(3)}>
		Download
	</Button>
	<Button loading={loading[3]} type="primary" danger onclick={() => load(3)}>Download</Button>
</div>

<!-- DISABLED -->

<div class="flex flex-wrap gap-2 p-4">
	<Button disabled>default button</Button>
	<Button disabled type="primary">primary button</Button>
	<Button disabled type="dashed">dashed button</Button>
	<Button disabled type="text">text button</Button>
	<Button disabled type="link">link button</Button>
</div>
