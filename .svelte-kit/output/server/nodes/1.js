

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D8OBWw6y.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/index.DJvQwRSe.js","_app/immutable/chunks/stores.BIxpo1Mn.js","_app/immutable/chunks/entry.CpB-muKB.js"];
export const stylesheets = [];
export const fonts = [];
