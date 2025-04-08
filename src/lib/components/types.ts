import type { Component, Snippet } from 'svelte';
import type { ClassValue } from 'svelte/elements';

export type ButtonSize = 'default' | 'small' | 'large';
export type ButtonType = 'primary' | 'default' | 'dashed' | 'link' | 'text';
export type ButtonIconPosition = 'start' | 'end';
export type ButtonHTMLType = 'submit' | 'reset' | 'button';
export type ButtonShape = 'default' | 'circle' | 'round';
export type ButtonProps = {
	children?: Snippet;
	href?: string;
	target?: string;
	type?: ButtonType;
	danger?: boolean;
	disabled?: boolean;
	ghost?: boolean;
	loading?: boolean;
	icon?: Snippet | Component;
	'icon-position'?: ButtonIconPosition;
	'html-type'?: 'button';
	size?: ButtonSize;
	shape?: ButtonShape;
	class?: ClassValue;
	onclick?: (event: MouseEvent) => void;
};

export type SpaceAlign = 'start' | 'end' | 'center' | 'baseline';
export type SpaceDirection = 'vertical' | 'horizontal';
export type SpaceSize = 'small' | 'medium' | 'large' | number;
export type SpaceProps = {
	align?: SpaceAlign;
	direction?: SpaceDirection;
	size?: SpaceSize | [number, number];
	split?: Snippet | Component | string;
	wrap?: boolean;
	children?: Snippet;
	compact?: boolean;
};

export type SwitchSize = 'small' | 'default';
export type SwitchProps = {
	'auto-focus'?: boolean;
	value?: boolean;
	checked?: Snippet;
	unchecked?: Snippet;
	loading?: boolean;
	size?: SwitchSize;
	onchange?: (value: boolean) => void;
	class?: string | string[];
	disabled?: boolean;
};

export type TooltipAlign = 'start' | 'end' | 'center' | 'baseline';
export type TooltipTrigger = 'hover' | 'focus' | 'click' | 'contextmenu';
export type TooltipProps = {
	title?: string | Snippet;
	align?: TooltipAlign;
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
	trigger?: TooltipTrigger;
	type?: 'button';
	button?: ButtonProps;
};
