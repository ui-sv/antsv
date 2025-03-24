import type { Component, Snippet } from 'svelte';

export type Classes<T extends string | number | symbol> = Record<T, string[] | string>;
export const isSnippet = (prop: Snippet | Component): prop is Snippet => '$$render' in prop;
