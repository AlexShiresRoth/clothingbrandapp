import { writable } from 'svelte/store';

export const cartStore = writable([]);

export const cartState = writable(false);

export const navState = writable(false);

export const isHovering = writable(false);

export const navIntersect = writable(false);

export const isMobile = writable(false);

export const showSideMenu = writable(false);
