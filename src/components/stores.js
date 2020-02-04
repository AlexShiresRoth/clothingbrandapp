import { writable } from 'svelte/store';

export const cartStore = writable([]);

export const cartState = writable(false);

export const navState = writable(false);

export const isMobile = writable(false);
