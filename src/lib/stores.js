import { writable } from 'svelte/store';

// Create a store for the splash screen state
export const splashScreenStore = writable(true);
export const startValue = writable(true); //For grabbing dropdown menu value
export const endValue = writable(true); //For grabbing dropdown menu value