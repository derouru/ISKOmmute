

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/feedback/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.COKdGbwH.js","_app/immutable/chunks/scheduler.LT7sLr-n.js","_app/immutable/chunks/index.DHq8Uwyc.js"];
export const stylesheets = ["_app/immutable/assets/3.C3IRZpP6.css"];
export const fonts = [];
