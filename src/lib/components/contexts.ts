import { getContext, setContext } from 'svelte';
import type { SpaceProps } from './types.js';

export function getSpaceContext() {
	return getContext<SpaceProps & { items: string[] }>('space_context');
}

export function setSpaceContext(props: SpaceProps & { items: string[] }) {
	setContext('space_context', props);
}
