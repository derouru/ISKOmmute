

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.D39D0mJX.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/each.PniRoRwK.js","_app/immutable/chunks/index.DJvQwRSe.js","_app/immutable/chunks/entry.CpB-muKB.js"];
export const stylesheets = [];
export const fonts = [];
