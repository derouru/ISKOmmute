

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.hX3oRaHl.js","_app/immutable/chunks/scheduler.tyKng7Df.js","_app/immutable/chunks/index.DhJ951SH.js","_app/immutable/chunks/entry.rSF5oIWy.js","_app/immutable/chunks/stores.DzBDzBTn.js"];
export const stylesheets = [];
export const fonts = [];
