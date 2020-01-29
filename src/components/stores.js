import { writable } from 'svelte/store';

export const cartStore = writable([]);

export const cartState = writable(false);
