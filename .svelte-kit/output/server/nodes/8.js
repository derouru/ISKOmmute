

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/tos/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.BIrF-0GA.js","_app/immutable/chunks/scheduler.8oj3oVuN.js","_app/immutable/chunks/index.Duw61gZK.js"];
export const stylesheets = [];
export const fonts = [];
