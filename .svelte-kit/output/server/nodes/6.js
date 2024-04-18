

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.Dy-6LNlP.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/index.DJvQwRSe.js"];
export const stylesheets = [];
export const fonts = [];
