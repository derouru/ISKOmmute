

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.CJ-do-e0.js","_app/immutable/chunks/scheduler.Bw6-MMLU.js","_app/immutable/chunks/index.DJvQwRSe.js"];
export const stylesheets = [];
export const fonts = [];
