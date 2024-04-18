

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/help/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.0vnYbg8C.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/index.DJvQwRSe.js"];
export const stylesheets = [];
export const fonts = [];
