

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/help/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.CGHzOQXa.js","_app/immutable/chunks/scheduler.LT7sLr-n.js","_app/immutable/chunks/index.DHq8Uwyc.js"];
export const stylesheets = [];
export const fonts = [];
