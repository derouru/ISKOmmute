import { writable } from 'svelte/store';

// Create a store for the splash screen state
export const splashScreenStore = writable(true);